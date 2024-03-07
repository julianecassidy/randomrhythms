<a name="readme-top"></a>
<div align="center">

  <h1 align="center">RandomRhythms</h1>

  <p align="center">
    Random concerts => new favorite bands
    <br />
    <br />
    <!-- <a href="https://julianecassidy.com/" target="_blank">Demo</a> -->
    </p>
</div>
<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/julianecassidy/randomrhythms)
![GitHub repo size](https://img.shields.io/github/repo-size/julianecassidy/randomrhythms)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/julianecassidy/randomrhythms)
![GitHub last commit](https://img.shields.io/github/last-commit/julianecassidy/randomrhythms)
<!-- ![GitHub](https://img.shields.io/github/license/julianecassidy/randomrhythms) -->

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
         <!-- <li><a href="#screenshots">Screenshots</a></li> -->
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

It starts in December 2023 when the year's Spotify Wrapped came out. Mine was, frankly, embarassing. This is mostly because I listen to the same five songs over and over, and I think my roommates might kick me out if I listen to "Born to Run" by Bruce Springsteen one more time.

The 2024 goal is to find new music.

I realized a lot of my favorite bands in the past have come from random concerts where I hardly knew the band and paid very little to get in. Even if I didn't like the music, the people watching was unbeatable.

Instead of choosing a concert by the band, RandomRhythms helps you choose a concert based on the date you want to go, the distance you want to travel, and the amount you want to pay. And, alright, you can filter out the genres you really despise if you must. See all the options that meet your criteria or get a completely random suggestion and just go for it.

Listen to new sounds, check out new local venues, and really shake up your Spotify Wrapped.

Through this project, I've enjoyed learning more about:

- User authentication and authorization
- User sessions and cookies
- Password hashing and encryption
- Building RESTful APIs
- Google Maps API and geocoding
- Web scraping ticketing websites for pricing data (without getting my IP banned for being a bot)
- Test driven development and mocking

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ### Screenshots

<p>
  <img src="static/images/screenshots/timeline.png" alt="Logged In Timeline">
  <br>
  <em>Logged-In Timeline</em>
</p>

<p>
  <img src="static/images/screenshots/profile.png" alt="User Profile Page">
  <br>
  <em>User Profile Page</em>
</p>

<p>
  <img src="static/images/screenshots/followers.png" alt="Followers Listing Page">
  <br>
  <em>Followers Listing Page</em>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Key Features

With the app, users will be able to:

- Create an account with an invite code
- Get a list of all concerts based on date and city
- Filter concert list by distance and cost
- View details on individual concerts
- Get a random concert based on date, city, and price
- Go directly to the ticket seller's site to purchase a ticket

This repo contains the React front end for the app. The component heirarchy currently looks like this:

![React Component Heirarchy](/react-heirarchy.PNG)

Check out the [Miro board](https://miro.com/app/board/uXjVNCfgqA8=/) for more details on the project, including database schema and API routes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project began in January 2024 and uses the following technologies:

Back End:
- ![Express][Express]
- ![PostgreSQL][PostgreSQL]
- ![Node.js][Node.js]

Front End:
- ![React][React]
- ![Vite][Vite]
- ![TailwindCSS][TailwindCSS]

APIs:
- [JamBase API](https://apidocs.jambase.com/)
- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)

For a full list of back end dependencies, see [requirements.txt](https://github.com/julianecassidy/randomrhythms-api/blob/master/requirements.txt). For front end
dependencies, see the [package.json](https://github.com/julianecassidy/randomrhythms/blob/master/package.json).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This project contains both a backend API and a frontend React app. First install
the [backend API](https://github.com/julianecassidy/randomrhythms-api). Then
set up and run the app:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/julianecassidy/randomrhythms.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start a local development server
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Build MVP front end app
- [ ] Add testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- LICENSE -->


<!-- CONTACT -->

## Contact

- [Juliane Cassidy](https://julianecassidy.com)
- [LinkedIn](https://www.linkedin.com/in/julianemcassidy/)

- Project Front End Link: [https://github.com/julianecassidy/randomrhythms](https://github.com/julianecassidy/randomrhythms)
- Project Back End Link: [https://github.com/julianecassidy/randomrhythms-api](https://github.com/julianecassidy/randomrhythms-api)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- VERSION HISTORY -->

## Version History
- 1.0.0 (in production)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGY BADGES -->


[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white
[Vite]: https://img.shields.io/badge/Vite-61a5ff?logo=vite&logoColor=black
[TailwindCSS]: https://img.shields.io/badge/Tailwind-38bdf8?logo=tailwindcss&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white
