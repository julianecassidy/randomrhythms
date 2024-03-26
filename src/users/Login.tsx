/** Component for Login
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * RoutesList -> Login
 */

type LoginProps = {
    login: (email: string, password: string, ) => void;
}

function Login({ login }: LoginProps) {
    console.debug("Login");

    return <p>login</p>
}

export default Login;