import { create } from 'zustand';
import type { SearchData } from "../types";

interface SearchDataState {
  searchData: SearchData;
  search: (dateFrom: string, dateTo: string, zipCode: string) => void;
};


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

export { useSearchDataStore };