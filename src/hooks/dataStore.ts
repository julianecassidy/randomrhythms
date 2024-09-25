import { create } from 'zustand';
import type { SearchData, FilterData, Concert } from "../types";
import { DEFAULT_DISTANCE, DEFUALT_MAX_COST } from 'config';
import filterConcerts from '@helpers/concertFiltering';

interface SearchDataState {
  searchData: SearchData;
  search: (dateFrom: string, dateTo: string, zipCode: string) => void;
};

interface FilterDataState {
  filterData: FilterData;
  displayConcerts: Concert[] | undefined;
  updateFilterData: (distance: string, minCost: string, maxCost: string) => void;
  filter: (concerts: Concert[], distance: string, minCost: string, maxCost: string) => void;
}

const initialSearchData: SearchData = {
  dateFrom: new Date().toLocaleDateString('en-CA'),
  dateTo: new Date(
    new Date().setDate(new Date().getDate() + 1)
  ).toLocaleDateString('en-CA'),
  zipCode: '80113',
};

const useSearchDataStore = create<SearchDataState>((set) => ({
  searchData: initialSearchData,
  search: (dateFrom, dateTo, zipCode) => set(() => ({
    searchData: { dateFrom, dateTo, zipCode }
  })),
}));


const useFilterDataStore = create<FilterDataState>((set) => ({
  filterData: { distance: DEFAULT_DISTANCE, minCost: "0", maxCost: DEFUALT_MAX_COST },
  displayConcerts: undefined,
  updateFilterData: (distance, minCost, maxCost) => set(() => ({
    filterData: { distance, minCost, maxCost }
  })),
  filter: (concerts, distance, minCost, maxCost) => set(() => ({
    displayConcerts: filterConcerts(
      concerts,
      distance,
      minCost,
      maxCost,
    )
  })),
}));


export { useSearchDataStore, useFilterDataStore };