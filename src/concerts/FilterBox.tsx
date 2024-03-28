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
        maxCost: "1000",
    });
    const [formErrors, setFormErrors] = useState<Array<string>>([]);

    console.debug("FilterBox", formData);

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
        <form className="FilterBox" onSubmit={handleSubmit}>
            <p>Cost</p>
            <label htmlFor="minCost">Minimum:</label>
            <input
                type="number"
                name="minCost"
                value={formData.minCost}
                min={0}
                max={Number(formData.maxCost) - 1}
                onChange={handleChange}
            />
            <label htmlFor="maxCost">Maximum:</label>
            <input
                type="number"
                name="maxCost"
                value={formData.maxCost}
                min={Number(formData.minCost + 1)}
                max={1000}
                onChange={handleChange}
            />
            <label htmlFor="distance">Max Distance</label>
            <input
                type="number"
                name="distance"
                value={formData.distance}
                min={0}
                max={DEFAULT_DISTANCE}
                onChange={handleChange}
            />
            <input type="submit" value="Apply" />

            {formErrors.length
                ? <Alert messages={formErrors} />
                : null
            }

        </form>
    );
}

export default FilterBox;