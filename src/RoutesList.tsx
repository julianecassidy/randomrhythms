import { Routes, Route, Navigate } from "react-router-dom";
import type { User } from "./types";
import Login from "@users/Login";
import Signup from "@users/Signup";
import Concerts from "@concerts/Concerts";
import ConcertDetail from "@concerts/ConcertDetail";
import RandomConcert from "@concerts/RandomConcert";
import NotFound from "@pages/NotFound";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import AccessibilityStatement from "@pages/AccessibilityStatement";

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
    signup: (
        email: string,
        name: string,
        password: string,
    ) => Promise<void>;
    login: (email: string, password: string, ) => Promise<void>;
    currentUser: User | null;
}

function RoutesList({ signup, login, currentUser }: RoutesListProps) {
    // console.debug("RoutesList");

    return (
        <Routes>
            {!currentUser &&
                <>
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/signup" element={<Signup signup={signup} />} />
                    <Route path="/" element={<Navigate to="/signup" />} />
                    <Route path="/concerts/:id" element={<Navigate to="/signup" />} />
                    <Route path="/random" element={<Navigate to="/signup" />} />
                </>
            }

            {currentUser &&
                <>
                    <Route path="/" element={<Concerts />} />
                    <Route path="/concerts/:id" element={<ConcertDetail />} />
                    <Route path="/random" element={<RandomConcert />} />
                    <Route path="/login" element={<Navigate to="/" />} />
                    <Route path="/signup" element={<Navigate to="/" />} />
                </>
            }

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;