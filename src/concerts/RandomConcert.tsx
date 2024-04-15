import { ReactElement, useState } from "react";
import type { Concert } from "types";
import RandomConcertForm from "./RandomConcertForm";
import LoadingSpinner from "@layout/LoadingSpinner";
import ConcertCard from "./ConcertCard";
import { ConcertApi } from "@helpers/api";

const MAX_DISTANCE = "50";
const MAX_COST = "200";

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
    const initialSearchData: SearchDataState = {
        dateFrom: new Date().toLocaleDateString('en-CA'),
        dateTo: new Date(
            new Date().setDate(new Date().getDate() + 1)
        ).toLocaleDateString('en-CA'),
        zipCode: '',
        distance: MAX_DISTANCE,
        cost: MAX_COST
    };

    const [concertData, setConcertData] = useState<ConcertDataState> (
        {concert: null, isLoading: false}
    );
    const [searchData, setSearchData] = useState<SearchDataState> (initialSearchData);

    // console.debug("RandomConcert", concertData);

    /** Takes a dateFrom, dateTo, zipCode, and optional price and updates
     * concertData with random matching concert. */
    async function getRandomConcert(
        dateFrom: string,
        dateTo: string,
        zipCode: string,
        distance: string,
        cost: string,
    ) {
        // console.log("getRandomConcert");
        setConcertData({concert: null, isLoading: true});
        setSearchData({ dateFrom, dateTo, zipCode, distance, cost });

        try {
            const searchResult = await ConcertApi.getRandomConcert(
                dateFrom,
                dateTo,
                zipCode,
                cost,
                distance,
            );
            setConcertData({concert: searchResult, isLoading: false});
        } catch(err) {
            setConcertData({concert: null, isLoading: false});
        }
    }

    function displayResults() : ReactElement  {
        if (concertData.isLoading) {
            return <LoadingSpinner />
        } else if (!concertData.isLoading && concertData.concert) {
            return (
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
                    <ConcertCard concert={concertData.concert} />
                    <div
                        className="RandomConcert-search-again card shadow-lg p-8
                        w-full md:w-1/4 h-40">
                        <h3 className="text-center">Not your jam?</h3>
                        <button
                            className="btn btn-primary hover:btn-secondary"
                            onClick={() =>
                                getRandomConcert(
                                    searchData.dateFrom,
                                    searchData.dateTo,
                                    searchData.zipCode,
                                    searchData.distance,
                                    searchData.cost)
                            }>Search Again
                        </button>
                    </div>
                </div>
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
        <div id="RandomConcert" className="bg-neutral mb-16 py-8 px-4 sm:px-8">
            <RandomConcertForm
                initialFormData={searchData}
                search={getRandomConcert}
                maxDistance={MAX_DISTANCE}
                maxCost={MAX_COST}
            />
            <div className="RandomConcert-results my-8">
                {displayResults()}
            </div>
        </div>
    )
}

export default RandomConcert;