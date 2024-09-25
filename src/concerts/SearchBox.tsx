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
    search: (dateFrom: string, dateTo: string, zipCode: string) => undefined;
};

type FormDataState = {
    dateFrom: string;
    dateTo: string;
    zipCode: string;
};

function SearchBox({ search }: SearchBoxProps) {

    const initialFormData: FormDataState = {
        dateFrom: new Date().toLocaleDateString('en-CA'),
        dateTo: new Date(
            new Date().setDate(new Date().getDate() + 1)
        ).toLocaleDateString('en-CA'),
        zipCode: '',
    };

    const dateMin = new Date().toLocaleDateString('en-CA')
    const yearFromToday = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    ).toLocaleDateString('en-CA');

    const [formData, setFormData] = useState<FormDataState>(initialFormData);
    const [formErrors, setFormErrors] = useState<Array<string>>([]);
    // console.debug("SearchBox, formData", formData);

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
        evt.preventDefault();

        const { dateFrom, dateTo, zipCode } = formData;
        search(dateFrom, dateTo, zipCode);
    };

    return (
        <div
            id="SearchBox"
            className="bg-base-200 border-[#FBFFFE] border-2 rounded-xl px-8
            lg:px-0 pt-4 pb-8"
        >
            <h2 className="pl-2 sm:pl-8">
                Find your next concert.
                <span className="hidden lg:inline">
                    &nbsp;Listen to your new favorite band.
                </span>
            </h2>
            <form
                id="SearchBox-form"
                className="flex flex-wrap justify-center gap-2 lg:flex-nowrap sm:gap-4"
                onSubmit={handleSubmit}
            >
                <label
                    className="input input-bordered input-lg bg-[#F0F3F5]
                    text-[#160C28] flex items-center gap-2 w-full lg:w-1/4">
                        <b>From:</b>
                    <input
                        className="w-2/3"
                        type="date"
                        name="dateFrom"
                        value={formData.dateFrom}
                        min={dateMin}
                        max={yearFromToday}
                        onChange={handleChange}
                    />
                </label>
                <label
                    className="input input-bordered input-lg bg-[#F0F3F5]
                    text-[#160C28] flex items-center gap-2 w-full lg:w-1/4">
                        <b>To:</b>
                    <input
                        className="w-2/3"
                        type="date"
                        name="dateTo"
                        value={formData.dateTo}
                        min={formData.dateFrom}
                        max={yearFromToday}
                        onChange={handleChange}
                    />
                </label>
                <label
                    className="input input-lg input-bordered bg-[#F0F3F5]
                    text-[#160C28] flex flex-nowrap items-center gap-2 w-full lg:w-1/4">
                        <b>Zip Code:</b>
                    <input
                        className="w-1/2"
                        type="text"
                        name="zipCode"
                        placeholder="12345"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </label>

                {formErrors.length
                    ? <Alert messages={formErrors} />
                    : null
                }

                <input
                    className="btn btn-lg btn-block lg:w-32 btn-primary
                            text-primary-content uppercase
                            transition duration-200 ease-in
                            hover:btn-secondary"
                    type="submit"
                    value="Rock On"
                />
            </form>
        </div>
    );
}

export default SearchBox;;