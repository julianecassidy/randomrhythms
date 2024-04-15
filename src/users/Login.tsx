import { useState } from "react";
import Alert from "@layout/Alert";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@layout/LoadingSpinner";

/** Component for Login
 *
 * Props:
 * - login()
 *
 * State:
 * - formData: { email, password }
 * - loading: boolean
 * - formErrors: []
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
    const [formErrors, setFormErrors] = useState<Array<string>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    // console.debug("Login", formData, formErrors);

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
        setLoading(true);

        const { email, password } = formData;

        try {
            await login(email, password);
            navigate("/");
        } catch (err: any) {
            // console.log("login err", err);
            setLoading(false);
            setFormErrors(err);
        }
    };

    return (
        <div id="Login" className="mx-8 mt-8 mb-32 bg-base-200 rounded-xl shadow-lg">
            <h2 className="pt-4 text-center underline decoration-accent decoration-2">
                Login
            </h2>
            <form
                id="Login-form"
                className="flex flex-wrap justify-center gap-8 p-8"
                onSubmit={handleSubmit}>
                <label
                    className="input input-lg input-bordered bg-[#F0F3F5]
                    text-[#160C28] flex items-center
                    gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" name="email" className="grow" placeholder="Email" value={formData.email} onChange={handleChange} />
                </label>
                <label
                    className="input input-lg input-bordered bg-[#F0F3F5]
                    text-[#160C28] flex items-center
                    gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" name="password" className="grow" placeholder="Password" value={formData.password} onChange={handleChange} />
                </label>
                    <p className="text-left w-full -mt-4">Must be at least 8 characters</p>


                {formErrors.length
                    ? <Alert messages={formErrors} />
                    : null
                }

                <input
                    className={
                        `btn btn-lg btn-block btn-primary
                        text-primary-content uppercase
                        transition duration-200 ease-in
                        hover:btn-secondary
                        ${(formData.password.length < 7 || formData.email.length < 7)
                            && "btn-disabled"}`
                    }
                    type="submit"
                    value="Login"
                />
            </form>
            {loading && <LoadingSpinner />}
        </div>
    )
}

export default Login;