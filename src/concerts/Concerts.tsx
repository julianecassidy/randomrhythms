import ConcertList from "./ConcertList";
import SearchBox from "./SearchBox";
import LoadingSpinner from "@layout/LoadingSpinner";
import { ConcertApi } from "@helpers/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchDataStore } from "hooks/dataStore";
import { useShallow } from 'zustand/react/shallow'

/** Component for Concerts
 *
 * Props:
 * - none
 *
 * State:
 * - concertData: {concerts: [{ id, headliner, openers, venue, cost, date, time,
 *                 door_time, ticket_url, event_status, event_source, distance},
 *                  ...],
 *                 isLoading: boolean}
 *
 * RoutesList -> Concerts -> { ConcertList, SearchBox, FilterBox }
 */
// type ConcertDataState = {
//     concerts: Concert[];
//     isLoading: boolean;
// };

function Concerts() {
    console.debug("Concerts");

    // zustand for persisting search data
    const searchData = useSearchDataStore(useShallow((state) => state.searchData));

    // react-query for search via API
    // Takes a dateFrom, dateTo, and zipCode and updates concertData with
    // matching concerts.
    const queryClient = useQueryClient();

    const { dateFrom, dateTo, zipCode } = searchData;
    const concertData = useQuery({
        queryKey: ['concerts', dateFrom, dateTo, zipCode ],
        queryFn: () => ConcertApi.getConcerts(dateFrom, dateTo, zipCode),
    });


    return (
        <div id="Concerts" className="bg-neutral mb-32 py-8 px-4 sm:px-8">
            <SearchBox />
            {
                concertData.isPending
                    ? <LoadingSpinner />
                    : <ConcertList concerts={concertData.data} />
            }
        </div>
    );
}

export default Concerts;