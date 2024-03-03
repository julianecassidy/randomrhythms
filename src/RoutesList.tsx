import { Routes, Route, Navigate } from "react-router-dom";
import type { User } from "./types";
import Homepage from "./pages/Homepage";
import Login from "./users/Login";
import Signup from "./users/Signup";
import Concerts from "./concerts/Concerts";
import ConcertDetail from "./concerts/ConcertDetail";
import RandomConcert from "./concerts/RandomConcert";
import NotFound from "./pages/NotFound";

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
    signup: () => void;
    login: () => void;
    currentUser: User;
}

function RoutesList({ signup, login, currentUser }: RoutesListProps) {
    console.debug("RoutesList");

    return (
        <Routes>
            {!currentUser &&
                <>
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/signup" element={<Signup signup={signup} />} />
                </>
            }

            {currentUser &&
                <>
                    <Route path="/concerts" element={<Concerts />} />
                    <Route path="/concerts/:id" element={<ConcertDetail />} />
                    <Route path="/random" element={<RandomConcert />} />
                </>
            }

            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;