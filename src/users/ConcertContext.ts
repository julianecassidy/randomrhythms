import React from 'react';
import type { Concert } from "../types";

type ConcertsContext = {
  concerts: Concert[];
}

type ConcertContext = {
  concert: Concert;
}

/** Context: provides concert object and setter for it throughout app. */

const ConcertsContext = React.createContext <ConcertsContext | null>(null);
const ConcertContext = React.createContext <ConcertContext | null>(null);

export { ConcertsContext, ConcertContext };
