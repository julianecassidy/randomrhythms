import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Concert } from "../types";
import NotFound from "@pages/NotFound";
import LoadingSpinner from "@layout/LoadingSpinner";
import { ConcertApi } from "@helpers/api";
import formatDate from "@helpers/formatDate";

/** Component for ConcertDetail
 *
 * Props:
 * - none
 *
 * State:
 * - concertData: {concert: { id, headliner, openers, venue, cost, date, time,
 *                 door_time, ticket_url, event_status, event_source, distance},
 *                 isLoading: boolean}
 *
 * RoutesList -> ConcertDetail
 */
type ConcertDataState = {
    concert: Concert | null;
    isLoading: boolean;
};

function ConcertDetail() {
    const { id } = useParams();

    const [concertData, setConcertData] = useState<ConcertDataState>(
        { concert: null, isLoading: true }
    );
    console.debug("ConcertDetail", "id", id, "concertData", concertData);

    // Get concert detail from API on component mount.
    useEffect(function getConcertOnMount(): void {
        async function getConcert() {
            try {
                const concertResult = await ConcertApi.getConcert(id);
                concertResult.dateTime = new Date(concertResult.dateTime);
                setConcertData({ concert: concertResult, isLoading: false });
            } catch {
                setConcertData(c => ({ ...c, isLoading: false }));
            }
        }
        getConcert();
    }, [id]);

    if (concertData.isLoading) return <LoadingSpinner />;
    if (!concertData.isLoading && !concertData.concert) return <NotFound />;

    return (
        <div className="ConcertDetail mx-8 mb-32">
            <img
                src={concertData.concert?.headliner.bandImageUrl}
                alt={concertData.concert?.headliner.name}
                className="mx-auto"
            />
            <div className="ConcertDetail-body mt-4 flex flex-wrap gap-8 justify-center">
                <div
                    className="ConcertDetail-title order-1 w-full text-center bg-base-200
                    p-4 shadow-md rounded-xl">
                    <h1
                        className="w-full text-center text-4xl mb-2"
                    >
                        {concertData.concert?.headliner.name}
                    </h1>
                    {concertData.concert?.headliner.genres.map((g, idx) => {
                        return (
                            <div className="badge badge-outline mx-0.5" key={idx}>
                                {g.replaceAll("-", " ")}
                            </div>
                        );
                    })}
                </div>
                <div
                    className="ConcertDetail-opener order-2 sm:order-3 card
                    w-full max-h-48 sm:w-1/4 bg-base-200 shadow-xl"
                >{concertData.concert?.openers.length
                    ? <div className="card-body">
                        <h3
                            className="underline text-decoration decoration-accent
                            decoration-1">
                            Openers
                        </h3>
                        <ul className="list-disc">
                            {concertData.concert?.openers.map((o, idx) =>
                                <li key={idx}>{o}</li>
                            )}
                        </ul>
                    </div>
                    : <div className="card-body">
                    <h3
                        className="underline text-decoration decoration-accent
                        decoration-1">
                        Openers
                    </h3>
                    <p>No openers listed. Better show up on time.</p>
                </div>}
                </div>
                <div
                    className="ConcertDetail-details order-3 sm:order-2 card w-full sm:w-2/3
                    bg-base-200 shadow-xl p-4"
                >
                    <h4>
                        {concertData.concert && formatDate(concertData.concert?.dateTime)}
                    </h4>
                    <div className="ConcertDetail-pricing">
                        <p>{(concertData.concert?.cost)
                            ? `Tickets start at: $${concertData.concert?.cost}`
                            : "Visit the ticketing website for pricing."}</p>
                        <button className="btn btn-primary hover:btn-secondary">
                            <a href={concertData.concert?.ticketUrl}>Buy Tickets!</a>
                        </button>
                    </div>
                    <div className="ConcertDetail-location mt-8">
                        <b>{concertData.concert?.venue.name}</b><br></br>
                        {concertData.concert?.venue.streetAddress}<br></br>
                        {`${concertData.concert?.venue.city}, ${concertData.concert?.venue.state}
                        ${concertData.concert?.venue.zipCode}`}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConcertDetail;