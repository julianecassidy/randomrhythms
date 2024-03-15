import { ReactElement, useState } from "react";
import type { Concert } from "types";
import RandomConcertForm from "./RandomConcertForm";
import LoadingSpinner from "@layout/LoadingSpinner";
import ConcertCard from "./ConcertCard";

/** Component for RandomConcert
 *
 * Props:
 * - none
 *
 * State:
 * - concert: { id, headliner, openers, venue, cost, date, time, door_time,
 *             ticket_url, event_status, distance}
 *
 * RoutesList -> RandomConcert -> RandomConcertForm
 */
type ConcertDataState = {
    concert: Concert | null;
    isLoading: boolean;
}

type SearchDataState = {
    dateFrom: string,
    dateTo: string,
    zipCode: string,
    distance: string,
    cost: string;
}

function RandomConcert() {
    const [concertData, setConcertData] = useState<ConcertDataState> (
        {concert: null, isLoading: false}
    )
    const [searchData, setSearchData] = useState<SearchDataState> (
        {dateFrom: '', dateTo: '', zipCode: '', distance: '', cost: ''}
    )

    console.debug("RandomConcert", concertData);

    /** Takes a dateFrom, dateTo, zipCode, and optional price and updates
     * concertData with random matching concert. */
    async function getRandomConcert(
        dateFrom: string,
        dateTo: string,
        zipCode: string,
        distance: string,
        cost: string,
    ) {
        setConcertData({concert: null, isLoading: true});
        setSearchData({ dateFrom, dateTo, zipCode, distance, cost });

        try {
            const costAsNum = cost === "" ? undefined : Number(cost);
            const searchResult = await Api.getRandomConcert(
                dateFrom,
                dateTo,
                zipCode,
                distance,
                costAsNum,
            );
            setConcertData({concert: searchResult, isLoading: false});
        } catch {
            setConcertData({concert: null, isLoading: false});
        }
    }

    function displayResults() : ReactElement  {
        if (concertData.isLoading) {
            return <LoadingSpinner />
        } else if (!concertData.isLoading && concertData.concert) {
            return (
                <>
                    <ConcertCard concert={concertData.concert} />
                    <div className="RandomConcert-search-again">
                        <p>Not your jam?</p>
                        <button onClick={() =>
                            getRandomConcert(
                                searchData.dateFrom,
                                searchData.dateTo,
                                searchData.zipCode,
                                searchData.distance,
                                searchData.cost)
                        }>Search Again
                        </button>
                    </div>
                </>
            )
        } else {
            return (
                <div className="RandomConcert-no-results">
                    <p>No concerts found. Try a different search.</p>
                </div>
            )
        }
    }

    return (
        <div className="RandomConcert">
            <RandomConcertForm
                initialFormData={searchData}
                search={getRandomConcert}
            />
            {displayResults()}
        </div>
    )
}

export default RandomConcert;