import { useState } from "react";
import ConcertList from "./ConcertList";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import LoadingSpinner from "../layout/LoadingSpinner";

/** Component for Concerts
 *
 * Props:
 * - none
 *
 * State:
 * - concertData: {concerts: [{ id, headliner, openers, venue, cost, date_time,
 *                 door_time, ticket_ulr, event_status, event_source},...],
 *                 isLoading: boolean}
 *
 * RoutesList -> Concerts -> { ConcertList, SearchBox, FilterBox }
 */
function Concerts() {

    const [concertData, setConcertData] = useState({concerts: [], isLoading: true})
    console.debug("Concerts", concertData);

    /** Takes a dateFrom, dateTo, and zipCode and updates concertData with
     * matching concerts.
     */
    function search(dateFrom: string, dateTo: string, zipCode:string) : void {
        const searchResults = Api.getConcerts(dateFrom, dateTo, zipCode);
        setConcertData({concerts: searchResults, isLoading: false});
    }

    return (
        <div className="Concerts">
            <SearchBox search={search} />
            <FilterBox />
            {
                concertData.isLoading
                ? <ConcertList concerts={concertData.concerts} />
                : <LoadingSpinner />
            }
        </div>
    )
}

export default Concerts;