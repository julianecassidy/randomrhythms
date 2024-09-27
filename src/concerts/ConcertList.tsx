import type { Concert } from "../types";
import ConcertCard from "./ConcertCard";
import FilterBox from "./FilterBox";
import { useFilterDataStore } from "hooks/dataStore";
import { useShallow } from 'zustand/react/shallow';


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
    concerts: Array<Concert> | undefined;
};

function ConcertList({ concerts }: ConcertListProps) {

    // zustand for persisting filter data and display concerts
    // const filterData = useFilterDataStore(useShallow((state) => state.filterData));
    const [displayConcerts] = useFilterDataStore(useShallow((state) => [state.displayConcerts ?? concerts]));
    // const [displayConcerts, setDisplayConcerts] = useState<Concert[]>(concerts || []);

    // console.log({ concerts, filterData, displayConcerts });

    /** Takes optional distance, minCost, and maxCost and updates
    * displayConcerts. */
    const updateDisplayConcerts = useFilterDataStore((state) => state.filter);
    const updateFilterData = useFilterDataStore((state) => state.updateFilterData);
    const filter = (distance: string, minCost: string, maxCost: string) => {
        updateFilterData(distance, minCost, maxCost);
        updateDisplayConcerts(
            concerts!,
            distance,
            minCost,
            maxCost
        );
    };

    // console.log("filteredConcerts", filteredConcerts);

    // setDisplayConcerts(filteredConcerts);
    // }

    // console.debug("ConcertList");

    return (
        <div className="ConcertList flex flex-wrap lg:flex-nowrap mt-8">
            <div className="ConcertList-filter w-full lg:w-1/4">
                {concerts &&
                    <FilterBox filter={filter} />
                }
            </div>
            {!displayConcerts?.length
                ? <div className="ConcertList-no-concerts mx-8 my-4">
                    Not seeing any results? Try changing the search or updating the filters.
                </div>
                : <div
                    className="ConcertList-concerts mt-8 lg:mt-0 mx-8 flex flex-wrap
                justify-center gap-8 w-full lg:w-3/4"
                >
                    {displayConcerts.map((c) => <ConcertCard key={c.id} concert={c} />)}
                </div>}
        </div>
    );
}

export default ConcertList;