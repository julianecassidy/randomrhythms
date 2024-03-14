import { useState } from "react";

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
}

type FormDataState = {
    distance: string;
    minCost: string;
    maxCost: string;
}

function FilterBox({ filter } : FilterBoxProps) {

    const [formData, setFormData] = useState<FormDataState>({
        distance: DEFAULT_DISTANCE,
        minCost: "0",
        maxCost: "1000",
    })
    const [formErrors, setFormErrors ] = useState<Array<string>>([]);

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
    async function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault()

        const { distance, minCost, maxCost } = formData;

        try {
            await filter(distance, minCost, maxCost);
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <form className="FilterBox" onSubmit={handleSubmit}>


        </form>
    )
}

export default FilterBox;