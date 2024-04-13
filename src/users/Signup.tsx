import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@layout/Alert";

/** Component for Signup
 *
 * Props:
 * - signup()
 *
 * State:
 * - formData: { email, password, name, code }
 * - formErrors: []
 *
 * RoutesList -> Signup
 */

type SignupProps = {
    signup: (
        email: string,
        name: string,
        password: string,
        code: string) => Promise<void>;
};

type FormDataState = {
    email: string;
    password: string;
    name: string;
    code: string;
};

function Signup({ signup }: SignupProps) {

    const [formData, setFormData] = useState<FormDataState>({
        email: "",
        password: "",
        name: "",
        code: "",
    });
    const [formErrors, setFormErrors ] = useState<Array<string>>([]);
    const navigate = useNavigate();

    console.debug("Signup", formData, formErrors);

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

        const { email, password, name, code } = formData;

        try {
            await signup(email, password, name, code);
            navigate("/");
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <form className="Signup" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                maxLength={20}
                onChange={handleChange}
            />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <label>Sign Up Code:</label>
            <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
            />

            {formErrors.length
                ? <Alert messages={formErrors} />
                : null
            }

            <input type="submit" value="Signup" />
        </form>
    )
}

export default Signup;