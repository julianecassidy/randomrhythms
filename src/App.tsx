import { useState, useEffect } from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import { jwtDecode } from "jwt-decode";
import type { User } from "types.ts";
import { UserApi } from "./helpers/api.ts";
import NavBar from '@layout/NavBar.tsx';
import RoutesList from './RoutesList.tsx';
import Footer from '@layout/Footer.tsx';
import './App.css';

/** App for RandomRhythms
 *
 * Props:
 * - none
 *
 * State:
 * - currentUser: {data: { id, email, name }, isLoaded }
 *
 * App -> { RoutesList, NavBar, Footer }
 */

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "token";

type CurrentUserState = {
  data: User | null;
  isLoaded: boolean;
}

function App() {

  const [currentUser, setCurrentUser] = useState<CurrentUserState>({
    data: null,
    isLoaded: false
  });
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug("App", "currentUser", currentUser, "token", token);

  useEffect(function loadUserInfo() : void {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() : Promise<void> {
        if (token) {
          try {
            const user: User = jwtDecode(token);
            UserApi.token = token;

            setCurrentUser({
              isLoaded: true,
              data: user
            });
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser({
              isLoaded: true,
              data: null
            });
          }
        } else {
          setCurrentUser({
            isLoaded: true,
            data: null
          });
        }
      }
      getCurrentUser();
    },
    [token]
  );

  /** signup: handle signup and site-wide login. Takes email, name, password,
   * and signup code. */
  async function signup(
    email: string,
    name: string,
    password: string,
    code: string) : Promise<void> {
     const tokenFromApi = await UserApi.register(email, name, password, code);
     setToken(tokenFromApi);
  }

  /** login: handle site-wide login. Takes email and password.  */
  async function login(email: string, password: string) : Promise<void> {
    const tokenFromApi = await UserApi.login(email, password);
    setToken(tokenFromApi);
  }

  /** logout: handle site-wide logout. */
  function logout() {
    setCurrentUser({
      isLoaded: true,
      data: null
    });
    setToken(null);
  }

  return (
    <>
      <NavBar currentUser={currentUser.data} logout={logout} />
      <RoutesList signup={signup} login={login} currentUser={currentUser.data} />
      <Footer />
    </>
  );
}

export default App;
