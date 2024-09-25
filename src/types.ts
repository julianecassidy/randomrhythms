
export type Site = {
  website: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
}

export type Concert = {
  id: string;
  headliner: Band;
  openers: Array<string>;
  venue: Venue;
  cost: number;
  dateTime: Date;
  ticketUrl: string;
  eventStatus: string;
  eventSource: string;
};

export type Venue = {
  name: string;
  venueImageUrl: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  distance: number | undefined;
};

export type Band = {
  name: string;
  bandImageUrl: string;
  genres: Array<string>;
};

export type SearchData = {
  dateFrom: string;
  dateTo: string;
  zipCode: string;
};