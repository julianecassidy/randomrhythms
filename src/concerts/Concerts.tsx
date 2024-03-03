import ConcertList from "./ConcertList";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";

/** Component for Concerts
 *
 * Props:
 * - none
 *
 * State:
 * - concerts: [{ id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_ulr, event_status},...]
 *
 * RoutesList -> Concerts -> { ConcertList, SearchBox, FilterBox }
 */
function Concerts() {
    console.debug("Concerts");

    return (
        <div className="Concerts">
            <SearchBox />
            <FilterBox />
            <ConcertList />
        </div>
    )
}

export default Concerts;