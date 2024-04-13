import { Link, NavLink } from 'react-router-dom';
import logo from '/8thNote.svg';
import { User } from '../types';
import { MouseEventHandler, useState, useEffect } from 'react';
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
};

function NavBar({ currentUser, logout }: NavBarProps) {
    console.debug("NavBar");

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div id="NavBar drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-fill">
                    <div id="NavBar-logo" className="flex-1 px-2 mx-2">
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="250"
                                height="60"
                                viewBox="-1 5 300 70"
                            >
                                <text
                                    id="_logo_"
                                    data-name="random rhythms"
                                    className="font-sans fill-base-100 text-[200px]"
                                    transform="translate(-3.684 55.747) scale(0.246 0.247)">{"Random Rhythms"}
                                </text>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <nav id="NavBar-menu">
                            {!currentUser &&
                                <>
                                    <NavLink to="/signup" className={({ isActive }) =>
                                        isActive ? "active" : ""}>Signup</NavLink>
                                    <NavLink to="/login" className={({ isActive }) =>
                                        isActive ? "active" : ""}>Login</NavLink>
                                </>}

                            {currentUser &&
                                <>
                                    <NavLink to="/" className={({ isActive }) =>
                                        isActive ? "active" : ""}>Concerts</NavLink>
                                    <NavLink to="/random" className={({ isActive }) =>
                                        isActive ? "active" : ""}>Random Concert</NavLink>
                                    <Link to="/login" onClick={logout}>Logout</Link>
                                </>
                            }
                            <label className="swap swap-rotate group">

                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggleTheme} type="checkbox" />

                                {/* sun icon */}
                                <svg className="swap-off fill-base-100 w-10 h-10 transition ease-in duration-100 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-on fill-base-100 w-10 h-10 transition ease-in duration-100 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </nav>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label className="btn btn-circle swap swap-rotate z-10" aria-label="open sidebar" htmlFor="my-drawer-3">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg className="swap-off fill-current [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            {/* close icon */}
                            <svg className="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </label>
                    </div>
                </div>
            </div>
            <div id="NavBar-mobile-menu" className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-[#160C28]">
                    {/* Sidebar content here */}
                    {!currentUser &&
                        <>
                            <li><NavLink to="/signup">Signup</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </>}

                    {currentUser &&
                        <>
                            <li><NavLink to="/concerts" >Concerts</NavLink></li>
                            <li><NavLink to="/random" >Random Concert</NavLink></li>
                            <li><Link to="/" onClick={logout}>Logout</Link></li>
                        </>
                    }
                    <label className="swap swap-rotate group">

                        {/* this hidden checkbox controls the state */}
                        <input onClick={toggleTheme} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-off fill-[#FBFFFE] w-10 h-10 transition ease-in duration-100 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-[#FBFFFE] w-10 h-10 transition ease-in duration-100 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </ul>
            </div>
        </div >
    );
}

export default NavBar;