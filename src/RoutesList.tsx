import { Routes, Route, Navigate } from "react-router-dom";
import type { User } from "./types";

/** Component for RoutesList
 *
 * Props:
 * - signup()
 * - login()
 * - currentUser: { email, name }
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, NotFound, Concerts, ConcertDetail,
 * RandomConcert }
 */

type RoutesListProps = {
    signup: Function;
    login: Function;
    currentUser: User;
}

function RoutesList({ signup, login, currentUser }: RoutesListProps) {
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