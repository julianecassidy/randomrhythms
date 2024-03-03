import { Link, NavLink } from 'react-router-dom';
import logo from '/8thNote.svg';
import { User } from '../types';
import React, { MouseEventHandler } from 'react';

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
    currentUser: User;
    logout: MouseEventHandler<HTMLAnchorElement>;
}

function NavBar({ currentUser, logout }: NavBarProps) {
    console.debug("NavBar");

    return (
        <div className="NavBar">
            <div className="NavBar-logo">
                <img src={logo} />
            </div>
            {!currentUser &&
                <>
                    <NavLink to="/signup">Signup</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </>}

            {currentUser &&
                <>
                    <NavLink to="/concerts" >Concerts</NavLink>
                    <NavLink to="/random" >Concerts</NavLink>
                    <NavLink to="/concerts" >Concerts</NavLink>
                    <Link to="/" onClick={logout}>
                        {`Logout ${currentUser.name}`}
                    </Link>
                </>
            }
        </div>
    );
}

export default NavBar;