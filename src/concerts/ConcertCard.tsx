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
                <img
                    src={concert.headliner.bandImageUrl}
                    alt={concert.headliner.name}
                />
                <h3>{concert.headliner.name}</h3>
                <ul>
                    {concert.headliner.genres.map((g, idx) => {
                        return <li key={idx}>{g}</li>
                    })}
                </ul>
                {concert.dateTime.toLocaleString()}
                {concert.venue.name}
                {concert.cost}
            </Link>
        </div>
    );
}

export default ConcertCard;