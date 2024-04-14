import { Link } from "react-router-dom";
import type { Concert } from "../types";

/** Component for ConcertCard
 *
 * Props:
 * - concert: { id, headliner, openers, venue, cost, date, time, door_time,
 *              ticket_url, event_status, event_source}
 *
 * State:
 * - none
 *
 * ConcertList -> ConcertCard
 */
type ConcertCardProps = {
    concert: Concert;
};

function ConcertCard({ concert }: ConcertCardProps) {
    console.debug("ConcertCard", concert);

    concert.dateTime = new Date(concert.dateTime);

    return (
        <div className="ConcertCard">
            <Link to={`/concerts/${concert.id}`} >
                <div
                    className="ConcertCard card w-96 sm:w-80 lg:w-96 h-[450px]
                    bg-neutral shadow-xl"
                >
                    <figure>
                        <img
                            src={concert.headliner.bandImageUrl}
                            alt={concert.headliner.name}
                        />
                    </figure>
                    <div className="ConcertCard card-body">
                        <h3 className="card-title text-3xl">
                            {concert.headliner.name}
                        </h3>
                        <p>{concert.dateTime.toLocaleString()}</p>
                        <p>{concert.venue.name}</p>
                        <div
                            className="ConcertCard card-actions flex flex-nowrap
                            items-center"
                        >
                            <div className="ConcertCard-cost w-1/3">
                                {concert.cost &&
                                <div className="badge badge-secondary badge-lg">
                                    ${concert.cost}
                                </div>
                                }
                            </div>
                            <div
                                className="ConcertCard-genres w-2/3 flex
                                justify-end"
                            >
                                {concert.headliner.genres.map((g, idx) => {
                                    return (
                                        <div className="badge badge-outline mx-0.5" key={idx}>
                                            {g.replaceAll("-", " ").slice(0, 12)}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>


            </Link>
        </div>
    );
}

export default ConcertCard;