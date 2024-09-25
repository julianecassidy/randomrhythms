import { useState } from "react";
import type { Concert, SearchData } from "../types";
import ConcertList from "./ConcertList";
import SearchBox from "./SearchBox";
import LoadingSpinner from "@layout/LoadingSpinner";
import { ConcertApi } from "@helpers/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

    const initialSearchData: SearchData = {
        dateFrom: new Date().toLocaleDateString('en-CA'),
        dateTo: new Date(
            new Date().setDate(new Date().getDate() + 1)
        ).toLocaleDateString('en-CA'),
        zipCode: '80113',
    };

    const [searchData, setSearchData] = useState<SearchData>(initialSearchData);
        // const [concertData, setConcertData] = useState<ConcertDataState>(
        //     { concerts: [], isLoading: false }
        // );
        // console.debug("Concerts", concertData);

    const queryClient = useQueryClient();

    const { dateFrom, dateTo, zipCode } = searchData;
    const concertData = useQuery({
        queryKey: ['concerts', dateFrom, dateTo, zipCode ],
        queryFn: () => ConcertApi.getConcerts(dateFrom, dateTo, zipCode),
    });

    /** Takes a dateFrom, dateTo, and zipCode and updates concertData with
     * matching concerts.
     */
    function search(
        dateFrom: string,
        dateTo: string,
        zipCode: string): undefined {
            setSearchData({ dateFrom, dateTo, zipCode });
        }
    // async function search(
    //     dateFrom: string,
    //     dateTo: string,
    //     zipCode: string): Promise<void> {
    //     setConcertData({ concerts: [], isLoading: true });
    //     const searchResults = await ConcertApi.getConcerts(dateFrom, dateTo, zipCode);
    //     setConcertData({ concerts: searchResults, isLoading: false });
    // }



    return (
        <div id="Concerts" className="bg-neutral mb-32 py-8 px-4 sm:px-8">
            <SearchBox search={search} />
            {
                concertData.isPending
                    ? <LoadingSpinner />
                    : <ConcertList concerts={concertData.data} />
            }
        </div>
    );
}

export default Concerts;