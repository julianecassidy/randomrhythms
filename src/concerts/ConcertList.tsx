import ConcertCard from "./ConcertCard";

/** Component for ConcertList
 *
 * Props:
 * - concerts: [{ id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_ulr, event_status},...]
 *
 * State:
 * - none
 *
 * Concerts -> ConcertList -> ConcertCard
 */
function ConcertList() {
    console.debug("ConcertList");

    return (
        <div className="ConcertList">
            <ConcertCard />
        </div>
    )
}

export default ConcertList;