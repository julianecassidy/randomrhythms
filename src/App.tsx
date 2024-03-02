import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '/8thNote.svg';
import './App.css';

/** App for RandomRhythms
 *
 * Props:
 * - none
 *
 * State:
 * - user: { id, email, name }
 *
 * App -> { RoutesList, NavBar, Footer }
 */

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesList signup={signup} login={login} currentUser={currentUser} />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
