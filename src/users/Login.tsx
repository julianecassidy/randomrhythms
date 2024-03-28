import { useState } from "react";
import Alert from "@layout/Alert";
import { useNavigate } from "react-router-dom";

/** Component for Login
 *
 * Props:
 * - login()
 *
 * State:
 * - formData: { email, password }
 *
 * RoutesList -> Login
 */

type LoginProps = {
    login: (email: string, password: string, ) => Promise<void>;
};

type FormDataState = {
    email: string;
    password: string;
};

function Login({ login }: LoginProps) {

    const [formData, setFormData] = useState<FormDataState>({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors ] = useState<Array<string>>([]);
    const navigate = useNavigate();

    console.debug("Login", formData, formErrors);

     /** Update form input. */
     function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {

        const fieldName = evt.target.name as keyof FormDataState;
        const value = evt.target.value;

        setFormData((currData: FormDataState) => {
            currData[fieldName] = value;
            return { ...currData };
        });
    };

    /** Handle form submit. */
    async function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault()

        const { email, password } = formData;

        try {
            await login(email, password);
            navigate("/concerts");
        } catch (err: any) {
            console.log("login err", err);
            setFormErrors(err);
        }
    };

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            {formErrors.length
                ? <Alert messages={formErrors} />
                : null
            }

            <input type="submit" value="Login" />
        </form>
    )
}

export default Login;