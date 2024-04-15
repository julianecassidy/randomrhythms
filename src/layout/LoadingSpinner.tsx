/** Component for LoadingSpinner
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * { Concert, RandomConcert, ConcertDetail } -> LoadingSpinner
 */
function LoadingSpinner() {
    // console.debug("LoadingSpinner");

    return (
        <div className="LoadingSpinner my-16 flex">
            <span className="mx-auto loading loading-bars loading-lg"></span>
        </div>
    )
}

export default LoadingSpinner;