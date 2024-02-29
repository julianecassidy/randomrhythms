import { Routes, Route, Navigate } from "react-router-dom";

/** Component for RoutesList
 *
 * Props:
 * - signup()
 * - login()
 * - currentUser: { username, name }
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, NotFound, Concerts, ConcertDetail,
 * RandomConcert }
 */

function RoutesList({ signup, login, currentUser }) {
    console.debug("RoutesList");

    return (
        <Routes>
            {!currentUser &&
                <>
                    <Route path="/login" element={<LoginForm login={login} />} />
                    <Route path="/signup" element={<SignupForm signup={signup} />} />
                </>
            }

            <Route path="/" element={<Homepage />} />

            {currentUser &&
                <>
                    <Route path="/concerts" element={<Concerts />} />
                    <Route path="/concerts/:id" element={<ConcertDetail />} />
                    <Route path="/companies/random" element={<RandomConcert />} />
                </>
            }

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default RoutesList;