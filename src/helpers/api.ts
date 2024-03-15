import type { Concert } from "types";

const BACKEND_BASE_URL = "http://localhost:3000/";

/** Concert API Class.
 *
 * Static class for all API calls to get concert data from the backend API.
*/
class ConcertApi {

  static token: string;

  static async request(endpoint: string, data = {}) {
    const url = new URL(`${BACKEND_BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${ConcertApi.token}`,
      'content-type': 'application/json',
    };

    url.search = new URLSearchParams(data).toString();

    const resp = await fetch(url, { method: "GET", headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  /** Makes an API request at /concerts to get all concerts in a default radius.
   * Takes { dateFrom, dateTo, zipCode } and makes the request with a valid user
   * token.
   *
   * Returns concerts: [{ 
   * id,
   * headliner: { name, bandImageUrl, genres},
   * openers: [name],
   * venue: { name, venueImageUrl, address },
   * cost,
   * dateTime,
   * ticketUrl,
   * eventStatus,
   * eventSource,
   * distance
   * }, ...] */
  static async getConcerts(
    dateFrom: string,
    dateTo: string,
    zipCode: string) : Promise<Array<Concert>>
  {
    const res = await this.request("concerts", { dateFrom, dateTo, zipCode });
    return res.concerts;
  }

  /** Makes an API request at /concerts/random to get a random concert.
   * Takes { dateFrom, dateTo, zipCode, cost (optional), distance (optional) }
   * and makes the request with a valid user token.
   *
   * Returns concert: { 
   * id,
   * headliner: { name, bandImageUrl, genres},
   * openers: [name],
   * venue: { name, venueImageUrl, address },
   * cost,
   * dateTime,
   * ticketUrl,
   * eventStatus,
   * eventSource,
   * distance
   * } */
  static async getRandomConcert(
    dateFrom: string,
    dateTo: string,
    zipCode: string,
    cost: string,
    distance: string) : Promise<Concert>
  {
    const res = await this.request(
      "concerts/random",
      { dateFrom, dateTo, zipCode, cost, distance }
    );
    return res.concert;
  }

  /** Makes an API request at /concerts/:id to get a concert.
   * Makes the request with a valid user token.
   *
   * Returns concert: { 
   * id,
   * headliner: { name, bandImageUrl, genres},
   * openers: [name],
   * venue: { name, venueImageUrl, address },
   * cost,
   * dateTime,
   * ticketUrl,
   * eventStatus,
   * eventSource,
   * distance
   * } */
    static async getConcert(id: string | undefined) : Promise<Concert> {
      const res = await this.request(`concerts/${id}`);
      return res.concert;
    }
}

export { ConcertApi };