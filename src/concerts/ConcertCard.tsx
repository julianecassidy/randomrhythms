import { Link } from "react-router-dom";
import type { Concert } from "../types";

/** Component for ConcertCard
 *
 * Props:
 * - concert: { id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_ulr, event_status, event_source}
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
    console.debug("ConcertCard");

    return (
        <div className="ConcertCard">
            <Link to={`/concerts/${concert.id}`} >
                <img
                    src={concert.headliner.band_image_url}
                    alt={concert.headliner.name}
                />
                <h3>{concert.headliner.name}</h3>
                {concert.date} {concert.time}
                {concert.venue.address}
                {concert.cost}
            </Link>
        </div>
    );
}

export default ConcertCard;