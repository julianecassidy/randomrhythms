/** Component for Signup
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * RoutesList -> Signup
 */

type SignupProps = {
    signup: (email: string, name: string, password: string, code: string) => void;
}

function Signup({ signup }: SignupProps) {
    console.debug("Signup")

    return <p>signup</p>
}

export default Signup;