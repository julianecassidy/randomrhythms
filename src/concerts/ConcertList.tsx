import { useState } from "react";
import type { Concert } from "../types";
import ConcertCard from "./ConcertCard";
import FilterBox from "./FilterBox";
import filterConcerts from "@helpers/concertFiltering";


/** Component for ConcertList
 *
 * Props:
 * - concerts: [{ id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_url, event_status, event_source},...]
 *
 * State:
 * - displayConcerts: [{ id, headliner, openers, venue, cost, date_time, door_time,
 *              ticket_url, event_status, event_source},...]
 *
 * Concerts -> ConcertList -> ConcertCard
 */
type ConcertListProps = {
    concerts: Array<Concert>;
};

function ConcertList({ concerts }: ConcertListProps) {

    const [displayConcerts, setDisplayConcerts] = useState<Concert[]>(concerts);

    /** Takes optional distance, minCost, and maxCost and updates
 * displayConcerts. */
    function filter(distance: string, minCost: string, maxCost: string) {
        const filteredConcerts = filterConcerts(
            concerts,
            distance,
            minCost,
            maxCost,
        );

        console.log("filteredConcerts", filteredConcerts);

        setDisplayConcerts(filteredConcerts);
    }

    console.debug("ConcertList");

    return (
        <div className="ConcertList">
            <FilterBox filter={filter} />
            {!displayConcerts.length
            ? <div className="ConcertList-no-concerts">
                No concerts match!
            </div>
            :<div className="ConcertList-concerts">
                {displayConcerts.map((c) => <ConcertCard key={c.id} concert={c} />)}
            </div>}
        </div>
    );
}

export default ConcertList;