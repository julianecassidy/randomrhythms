import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Concert } from "../types";
import NotFound from "@pages/NotFound";
import LoadingSpinner from "@layout/LoadingSpinner";
import { ConcertApi } from "@helpers/api";

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
}

function ConcertDetail() {
    const { id } = useParams();

    const [concertData, setConcertData] = useState<ConcertDataState> (
        {concert: null, isLoading: true}
    )
    console.debug("ConcertDetail", "id", id, "concertData", concertData);

    // Get concert detail from API on component mount.
    useEffect(function getConcertOnMount() : void {
        async function getConcert() {
            try {
                const concertResult = await ConcertApi.getConcert(id);
                setConcertData({concert: concertResult, isLoading: false});
            } catch {
                setConcertData(c => ({ ...c, isLoading: false }))
            }
        }
        getConcert();
    }, [id]);

    if (concertData.isLoading) return <LoadingSpinner />
    if (!concertData.isLoading && !concertData.concert) return <NotFound />

    return (
        <div className="ConcertDetail">
            <img
                    src={concertData.concert?.headliner.band_image_url}
                    alt={concertData.concert?.headliner.name}
                />
                <h3>{concertData.concert?.headliner.name}</h3>
                Openers:
                <ul>
                    {concertData.concert?.openers.map((o, idx) => {
                        return <li key={idx}>{o.name}</li>
                    })}
                </ul>
                {concertData.concert?.date} {concertData.concert?.time}
                {concertData.concert?.venue.name}
                {concertData.concert?.venue.address}
                {concertData.concert?.cost}
                Doors at: {concertData.concert?.door_time}
        </div>
    )
}

export default ConcertDetail;