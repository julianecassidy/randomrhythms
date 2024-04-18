import { useState } from "react";
import Alert from "@layout/Alert";

/** Component for FilterBox
 *
 * Props:
 * - filter()
 *
 * State:
 * - formData: { distance, minCost, maxCost }
 * - formErrors: []
 *
 * Concerts -> FilterBox
 */
// This coordinates to the default distance (in miles) used by the API for
// searches from the zip code.
const DEFAULT_DISTANCE = "50";

type FilterBoxProps = {
    filter: (distance: string, minCost: string, maxCost: string) => void;
};

type FormDataState = {
    distance: string;
    minCost: string;
    maxCost: string;
};

function FilterBox({ filter }: FilterBoxProps) {

    const [formData, setFormData] = useState<FormDataState>({
        distance: DEFAULT_DISTANCE,
        minCost: "0",
        maxCost: "200",
    });
    const [formErrors, setFormErrors] = useState<Array<string>>([]);

    // console.debug("FilterBox", formData);

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
    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();

        const { distance, minCost, maxCost } = formData;

        try {
            filter(distance, minCost, maxCost);
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <div
            className="bg-base-200 border-[#FBFFFE] border-2 rounded-xl px-8
            lg:px-4 pt-4 pb-8"
        >
            <h3 className="text-center">Filter Concerts</h3>
            <form
                className="FilterBox-form flex flex-wrap justify-start gap-4
                sm:gap-4 w-full"
                onSubmit={handleSubmit}
            >
                <label htmlFor="cost" className="w-full"><b>Cost</b></label>
                <small className="-mt-3">{`$0 to $${formData.maxCost}`}</small>
                <input
                    name="maxCost"
                    type="range"
                    value={formData.maxCost}
                    min="0"
                    max="200"
                    step="5"
                    className="range range-accent"
                    onChange={handleChange}
                />
                <label htmlFor="distance" className="mt-4 w-full">
                    <b>Distance</b>
                </label>
                <small className="-mt-3">{`0 mi to ${formData.distance} mi`}</small>
                <input
                    name="distance"
                    type="range"
                    value={formData.distance}
                    min="0"
                    max={DEFAULT_DISTANCE}
                    className="range range-accent"
                    onChange={handleChange}
                />
                <input
                    className="btn btn-lg btn-block lg:w-32 btn-primary mt-4
                        mx-auto text-primary-content uppercase
                        transition duration-200 ease-in hover:btn-secondary"
                    type="submit"
                    value="Apply"
                />

                {formErrors.length
                    ? <Alert messages={formErrors} />
                    : null
                }

            </form>
        </div>
    );
}

export default FilterBox;