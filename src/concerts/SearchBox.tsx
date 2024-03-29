import React, { useState } from "react";
import Alert from "@layout/Alert";

/** Component for SearchBox
 *
 * Props:
 * - search()
 *
 * State:
 * - formData: { dateFrom, dateTo, zipCode }
 * - formErrors: []
 *
 * Concerts -> SearchBox
 */

type SearchBoxProps = {
    search: (dateFrom: string, dateTo: string, zipCode: string) => Promise<void>;
}

type FormDataState = {
    dateFrom: string;
    dateTo: string;
    zipCode: string;
}

function SearchBox({ search }: SearchBoxProps) {

    const initialFormData: FormDataState = {
        dateFrom: new Date().toLocaleDateString('en-CA'),
        dateTo: new Date().toLocaleDateString('en-CA'),
        zipCode: '',
    };

    const yearFromToday = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    ).toLocaleDateString();

    const [formData, setFormData ] = useState<FormDataState>(initialFormData);
    const [formErrors, setFormErrors ] = useState<Array<string>>([]);
    console.debug("SearchBox, formData", formData);

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

        const { dateFrom, dateTo, zipCode } = formData;

        try {
            await search(dateFrom, dateTo, zipCode);
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

            {formErrors.length
                ? <Alert messages={formErrors} />
                : null
            }

            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchBox;