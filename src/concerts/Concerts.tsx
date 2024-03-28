import { useState } from "react";
import type { Concert } from "../types";
import ConcertList from "./ConcertList";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import LoadingSpinner from "@layout/LoadingSpinner";
import filterConcerts from "@helpers/concertFiltering";
import { ConcertApi } from "@helpers/api";

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
type ConcertDataState = {
    concerts: Concert[];
    isLoading: boolean;
}

function Concerts() {

    const [concertData, setConcertData] = useState<ConcertDataState> (
        {concerts: [], isLoading: true}
    );
    const [displayConcerts, setDisplayConcerts] = useState<Concert[]> ([]);
    console.debug("Concerts", concertData);

    /** Takes a dateFrom, dateTo, and zipCode and updates concertData with
     * matching concerts.
     */
    async function search(
        dateFrom: string,
        dateTo: string,
        zipCode:string) : Promise<void> {
        const searchResults = await ConcertApi.getConcerts(dateFrom, dateTo, zipCode);
        setConcertData({concerts: searchResults, isLoading: false});
        setDisplayConcerts(searchResults);
    }

    /** Takes optional distance, minCost, and maxCost and updates
     * displayConcerts. */
    function filter(distance: string, minCost: string, maxCost: string) {
        const filteredConcerts = filterConcerts(
            concertData.concerts,
            distance,
            minCost,
            maxCost,
        )

        setDisplayConcerts(filteredConcerts);
    }

    return (
        <div className="Concerts">
            <SearchBox search={search} />
            <FilterBox filter={filter}/>
            {
                concertData.isLoading
                ? <LoadingSpinner />
                : <ConcertList concerts={displayConcerts} />
            }
        </div>
    )
}

export default Concerts;