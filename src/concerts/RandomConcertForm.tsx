import { useState } from "react";
import Alert from "@layout/Alert";

/** Component for RandomConcertForm
 *
 * Props:
 * - search()
 * - intitialFormData: { dateFrom, dateTo, zipCode, cost }
 *
 * State:
 * - formData: { dateFrom, dateTo, zipCode, cost }
 * - formErrors: []
 *
 * RandomConcert -> RandomConcertForm
 */
type RandomConcertFormProps = {
    initialFormData: {
        dateFrom: string,
        dateTo: string,
        zipCode: string,
        distance: string,
        cost: string,
    };
    search: (
        dateFrom: string,
        dateTo: string,
        zipCode: string,
        distance: string,
        cost: string) => Promise<void>;
};

type FormDataState = {
    dateFrom: string;
    dateTo: string;
    zipCode: string;
    distance: string;
    cost: string;
}

function RandomConcertForm({ initialFormData, search }: RandomConcertFormProps) {

    const yearFromToday = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    ).toLocaleDateString();

    const [formData, setFormData ] = useState<FormDataState>(initialFormData);
    const [formErrors, setFormErrors ] = useState<Array<string>>([]);

    console.debug("RandomConcertForm", formData);

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

        const { dateFrom, dateTo, zipCode, distance, cost } = formData;

        try {
            await search(dateFrom, dateTo, zipCode, distance, cost);
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <form className="SearchBox" onSubmit={handleSubmit}>
        <label>Start Date:</label>
        <input
            type="date"
            name="dateFrom"
            value={formData.dateFrom}
            min={formData.dateFrom}
            max={yearFromToday}
            onChange={handleChange}
        />
        <label>End Date:</label>
        <input
            type="date"
            name="dateTo"
            value={formData.dateTo}
            min={formData.dateTo}
            max={yearFromToday}
            onChange={handleChange}
        />
        <label>Zip Code:</label>
        <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
        />
        <label>Max Ticket Cost:</label>
        <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
        />
        <input type="submit">Search</input>
        {formErrors.length
            ? <Alert messages={formErrors} />
            : null
        }
    </form>
    )
}

export default RandomConcertForm;