import type { Concert } from "../types";
import ConcertCard from "./ConcertCard";

/** Component for ConcertList
 *
 * Props:
 * - concerts: [{ id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_ulr, event_status, event_source},...]
 *
 * State:
 * - none
 *
 * Concerts -> ConcertList -> ConcertCard
 */
type ConcertListProps = {
    concerts: Array<Concert>
}

function ConcertList({ concerts }: ConcertListProps) {
    console.debug("ConcertList");

    if (!concerts.length) {
        return (
            <div className="ConcertList-no-concerts">
                No concerts match!
            </div>
        )
    }

    return (
        <div className="ConcertList">
            { concerts.map((c) => <ConcertCard key={c.id} concert={c} />) }
        </div>
    )
}

export default ConcertList;