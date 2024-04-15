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

        // console.log("filteredConcerts", filteredConcerts);

        setDisplayConcerts(filteredConcerts);
    }

    // console.debug("ConcertList");

    return (
        <div className="ConcertList flex flex-wrap lg:flex-nowrap mt-8">
            <div className="ConcertList-filter w-full lg:w-1/4">
                <FilterBox filter={filter} />
            </div>
            {!displayConcerts.length
            ? <div className="ConcertList-no-concerts mx-8">
                Not seeing any results? Try changing the search or updating the filters.
            </div>
            :<div
                className="ConcertList-concerts mt-8 lg:mt-0 mx-8 flex flex-wrap
                justify-center gap-8 w-full lg:w-3/4"
            >
                {displayConcerts.map((c) => <ConcertCard key={c.id} concert={c} />)}
            </div>}
        </div>
    );
}

export default ConcertList;