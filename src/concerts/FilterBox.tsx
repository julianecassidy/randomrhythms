import { useState } from "react";
import Alert from "@layout/Alert";
import { useFilterDataStore } from "hooks/dataStore";
import { useShallow } from 'zustand/react/shallow';

/** Component for FilterBox
 *
 * Props:
 * - none
 *
 * State:
 * - formData: { distance, minCost, maxCost }
 * - formErrors: []
 *
 * ConcertList -> FilterBox
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

    const initialFormData = useFilterDataStore(useShallow((state) => state.filterData));

    const [formData, setFormData] = useState<FormDataState>(initialFormData);
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
    function handleSubmit() {
        const { distance, minCost, maxCost } = formData;

        try {
            filter(distance, minCost, maxCost);
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <div className="collapse md:collapse-open">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title bg-primary md:bg-white text-primary-content md:text-base-100 peer-checked:bg-secondary md:peer-checked:bg-white peer-checked:text-neutral md:peer-checked:text-base-100">
                <h3 className="text-center font-black">Filter Concerts</h3>
            </div>
            <div
                className="collapse-content bg-primary md:bg-white text-primary-content md:text-base-100 peer-checked:bg-secondary md:peer-checked:bg-white peer-checked:text-base-100">
                <div
                    className="bg-base-200 border-[#FBFFFE] border-2 rounded-xl px-8
            lg:px-4 pt-4 pb-8"
                >
                    <form
                        className="FilterBox-form flex flex-wrap justify-start gap-4
                sm:gap-4 w-full"
                    >
                        <label htmlFor="cost" className="w-full"><b>Cost</b></label>
                        <span className="-mt-3"><strong>$0</strong> to <strong>${`${formData.maxCost}`}</strong></span>
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
                        <span className="-mt-3"><strong>0 mi</strong> to <strong>{`${formData.distance} mi`}</strong></span>
                        <input
                            name="distance"
                            type="range"
                            value={formData.distance}
                            min="0"
                            max={DEFAULT_DISTANCE}
                            className="range range-accent"
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-lg btn-block lg:w-32 btn-primary mt-4
                        mx-auto text-primary-content uppercase
                        transition duration-200 ease-in hover:btn-secondary"
                            type="button"
                            onClick={handleSubmit}>Apply
                        </button>

                        {formErrors.length
                            ? <Alert messages={formErrors} />
                            : null
                        }

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FilterBox;