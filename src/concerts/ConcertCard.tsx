import { Link } from "react-router-dom";
import type { Concert } from "../types";
import formatDate from "@helpers/formatDate";

/** Component for ConcertCard
 *
 * Props:
 * - concert: { id, headliner, openers, venue, cost, date, time, door_time,
 *              ticket_url, event_status, event_source}
 *
 * State:
 * - none
 *
 * ConcertList -> ConcertCard
 */
type ConcertCardProps = {
    concert: Concert;
};

function ConcertCard({ concert }: ConcertCardProps) {
    // console.debug("ConcertCard", concert);

    concert.dateTime = new Date(concert.dateTime);

    return (
        <div className="ConcertCard group">
            <Link to={`/concerts/${concert.id}`} >
                <div
                    className="ConcertCard card w-84 md:w-96 max-h-[450px]
                    bg-neutral shadow-xl transition duration-200 ease-in
                    md:group-hover:scale-105"
                >
                    <figure>
                        <img
                            src={concert.headliner.bandImageUrl}
                            alt={concert.headliner.name}
                        />
                    </figure>
                    <div className="ConcertCard card-body">
                        <h3 className="card-title text-3xl">
                            {concert.headliner.name}
                        </h3>
                        <p><b>{formatDate(concert.dateTime)}</b></p>
                        <p><b>{concert.venue.name}</b><br></br>
                        {`${concert.venue.city}, ${concert.venue.state}`}</p>
                        <div
                            className="ConcertCard card-actions flex flex-nowrap
                            items-center"
                        >
                            <div className="ConcertCard-cost w-1/3 badge
                                badge-primary badge-lg hover:badge-secondary">
                                <a
                                    href={concert.ticketUrl}
                                    aria-label={
                                        `Visit ticket merchant for ${concert.headliner.name}`
                                    }>
                                    {concert.cost
                                        ? `$${concert.cost}`
                                        : <small>Get price</small>
                                    }
                                </a>
                            </div>
                            <div
                                className="ConcertCard-genres w-2/3 flex flex-wrap gap-y-1.5
                                justify-end"
                            >
                                {concert.headliner.genres.map((g, idx) => {
                                    return (
                                        <div className="badge badge-outline mx-0.5" key={idx}>
                                            {g.replaceAll("-", " ")}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>


            </Link>
        </div>
    );
}

export default ConcertCard;