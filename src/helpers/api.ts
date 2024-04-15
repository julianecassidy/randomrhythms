import type { Concert } from "types";

const BACKEND_BASE_URL = import.meta.env.PROD
  ? import.meta.env.API_URL
  : "http://localhost:3000";

/** User API Class.
 *
 * Static class for all API calls to get/post user data from the backend API.
*/
class UserApi {
  static token: string | undefined;

  static async request(endpoint: string, data = {}, method = "GET") {
    const url = new URL(`${BACKEND_BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${UserApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    console.log("url", url);
    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      // console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error.message) ? error.message : [error.message];
    }

    return await resp.json();
  }

  /** Makes an API request at /register to register a user.
   * Takes { email, password, name, code }.
   * Adds token to class and returns user.
   */
  static async register(
    email: string,
    password: string,
    name: string,
  ) : Promise<string> {
    console.log("register")
    const userData = { email, password, name, signupCode: "born to run" };

    const { token } = await this.request("auth/register", userData, "POST");
    console.log("token in register", token);

      return token;
    }

  /** Makes an API request at /login to log in a user.
   * Takes { email, password }.
   * Adds token to class and returns user.
   */
  static async login(
    email: string,
    password: string) : Promise<string> {
      const userData = { email, password };
      const { token } = await this.request("auth/login", userData, "POST");
      return token;
    }
}

/** Concert API Class.
 *
 * Static class for all API calls to get concert data from the backend API.
*/
class ConcertApi {

  static async request(endpoint: string, data = {}) {
    const url = new URL(`${BACKEND_BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${UserApi.token}`,
      'content-type': 'application/json',
    };

    url.search = new URLSearchParams(data).toString();

    const resp = await fetch(url, { method: "GET", headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      // console.error("API Error:", resp.statusText, resp.status);
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
    zipCode: string) : Promise<Array<Concert>> {
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
    price: string,
    geoRadius: string) : Promise<Concert> {
    const res = await this.request(
      "concerts/random",
      { dateFrom, dateTo, zipCode, price, geoRadius }
    );
    return res.randomConcert;
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

export { UserApi, ConcertApi };