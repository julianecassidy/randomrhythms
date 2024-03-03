import RandomConcertForm from "./RandomConcertForm";

/** Component for RandomConcert
 *
 * Props:
 * - none
 *
 * State:
 * - concert: { id, headliner, openers, venue, cost, date_time, door_time,
 *             ticket_ulr, event_status}
 *
 * RoutesList -> RandomConcert -> RandomConcertForm
 */
function RandomConcert() {
    console.debug("RandomConcert");

    return (
        <div className="RandomConcert">
            <RandomConcertForm />
        </div>
    )
}

export default RandomConcert;