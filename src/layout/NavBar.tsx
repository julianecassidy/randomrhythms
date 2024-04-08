import { Link, NavLink } from 'react-router-dom';
import logo from '/8thNote.svg';
import { User } from '../types';
import { MouseEventHandler } from 'react';
import "@layout/NavBar.css";

/** Component for NavBar
 *
 * Props:
 * - currentUser: { id, email, name }
 * - logout()
 *
 * State:
 * - none
 *
 * App -> NavBar
 */

type NavBarProps = {
    currentUser: User | null;
    logout: MouseEventHandler<HTMLAnchorElement>;
}

function NavBar({ currentUser, logout }: NavBarProps) {
    console.debug("NavBar");

    return (
        <div className="NavBar">
            <div id="NavBar-logo">
                <img src={logo} />
            </div>
            <nav id="NavBar-menu">
                {!currentUser &&
                    <>
                        <NavLink to="/signup">Signup</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </>}

                {currentUser &&
                    <>
                        <NavLink to="/concerts" >Concerts</NavLink>
                        <NavLink to="/random" >Random Concert</NavLink>
                        <Link to="/" onClick={logout}>
                            {`Logout ${currentUser.name}`}
                        </Link>
                    </>
                }
            </nav>
        </div>
    );
}

export default NavBar;