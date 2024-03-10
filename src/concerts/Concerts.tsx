import { useState } from "react";
import type { Concert } from "../types";
import ConcertList from "./ConcertList";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import LoadingSpinner from "@layout/LoadingSpinner";

/** Component for Concerts
 *
 * Props:
 * - none
 *
 * State:
 * - concertData: {concerts: [{ id, headliner, openers, venue, cost, date_time,
 *                 door_time, ticket_url, event_status, event_source},...],
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
    console.debug("Concerts", concertData);

    /** Takes a dateFrom, dateTo, and zipCode and updates concertData with
     * matching concerts.
     */
    async function search(
        dateFrom: string,
        dateTo: string,
        zipCode:string) : Promise<void> {
        const searchResults = await Api.getConcerts(dateFrom, dateTo, zipCode);
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