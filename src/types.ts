
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
}

export type Concert = {
  id: string;
  headliner: Band;
  openers: Array<{ name: string; genres: Array<string> }>;
  venue: Venue;
  cost: number;
  date: string;
  time: string;
  door_time: string;
  ticket_url: string;
  event_status: string;
  event_source: string;
};

export type Venue = {
  name: string;
  venue_image_url: string;
  address: string;
};

export type Band = {
  name: string;
  band_image_url: string;
  genres: Array<string>;
};