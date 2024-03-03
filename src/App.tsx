import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './layout/NavBar.tsx';
import RoutesList from './RoutesList.tsx';
import Footer from './layout/Footer.tsx';
import logo from '/8thNote.svg';
import './App.css';

/** App for RandomRhythms
 *
 * Props:
 * - none
 *
 * State:
 * - currentUser: { id, email, name }
 *
 * App -> { RoutesList, NavBar, Footer }
 */

function App() {


  /** signup: handle signup and site-wide login. Takes email, name, password,
   * and signup code. */
  function signup() {

  }

  /** login: handle site-wide login. Takes email and password.  */
  function login() {

  }

  /** logout: handle site-wide logout. */
  function logout() {

  }

  return (
    <>
      <BrowserRouter>
        <NavBar currentUser={currentUser} logout={logout} />
        <RoutesList signup={signup} login={login} currentUser={currentUser} />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
