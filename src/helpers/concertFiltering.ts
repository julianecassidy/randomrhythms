import type { Concert } from "types";

/** Takes optional distance, minCost, and maxCost and updates
* displayConcerts. */
function filterConcerts(
  concerts: Array<Concert>,
  distance: string,
  minCost: string,
  maxCost: string) : Array<Concert>{

  const distanceNum = distance !== "" ? Number(distance) : undefined;
  const minCostNum = minCost !== "" ? Number(minCost) : undefined;
  const maxCostNum = maxCost !== "" ? Number(maxCost) : undefined;
  let filteredConcerts = concerts;

  if (distanceNum) {
    filteredConcerts = filteredConcerts.filter(c => c.venue.distance <= distanceNum);
  }

  if (minCostNum) {
    filteredConcerts = filteredConcerts.filter(c => c.cost >= minCostNum);
  }

  if (maxCostNum) {
    filteredConcerts = filteredConcerts.filter(c => c.cost <= maxCostNum);
  }

  return filteredConcerts;
}

export default filterConcerts;