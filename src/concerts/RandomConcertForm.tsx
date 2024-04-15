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
    maxDistance: string;
    maxCost: string;
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
};

function RandomConcertForm(
    { initialFormData, maxDistance, maxCost, search }: RandomConcertFormProps) {

    const dateMin = new Date().toLocaleDateString('en-CA')
    const yearFromToday = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    ).toLocaleDateString('en-CA');

    const [formData, setFormData] = useState<FormDataState>(initialFormData);
    const [formErrors, setFormErrors] = useState<Array<string>>([]);

    // console.debug("RandomConcertForm", formData);

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

        const { dateFrom, dateTo, zipCode, distance, cost } = formData;

        try {
            await search(dateFrom, dateTo, zipCode, distance, cost);
        } catch (err: any) {
            setFormErrors(err);
        }
    };

    return (
        <div
            id="RandomConcertForm"
            className="bg-base-200 border-[#FBFFFE] border-2 rounded-xl px-8 lg:px-0 pt-4 pb-8"
        >
            <h2 className="pl-2 sm:pl-8">
                <span className="hidden lg:inline">
                Choose how much you'll pay. Choose how far you'll travel. &nbsp;
                </span>
                    Let us choose the concert.
            </h2>
            <form
                id="RandomConcertForm-form"
                className="flex flex-wrap justify-center gap-2 sm:gap-4"
                onSubmit={handleSubmit}>
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
                <div className="RandomConcertForm-slider w-full mx-8 md:w-1/3 lg:w-1/4">
                    <label htmlFor="cost" className="w-full"><b>Cost</b></label>
                    <small className="-mt-3 ml-4">{`$0 to $${formData.cost}`}</small>
                    <input
                        name="cost"
                        type="range"
                        value={formData.cost}
                        min="0"
                        max={maxCost}
                        step="5"
                        className="range range-accent"
                        onChange={handleChange}
                    />
                </div>
                <div className="RandomConcertForm-slider mx-8 w-full md:w-1/3 lg:w-1/4">
                    <label htmlFor="distance" className="mt-4 w-full">
                        <b>Distance</b>
                    </label>
                    <small className="-mt-3 ml-4">{`0 mi to ${formData.distance} mi`}</small>
                    <input
                        name="distance"
                        type="range"
                        value={formData.distance}
                        min="0"
                        max={maxDistance}
                        className="range range-accent"
                        onChange={handleChange}
                    />
                </div>

                {formErrors.length
                    ? <Alert messages={formErrors} />
                    : null
                }

                <input
                    className="btn btn-lg btn-block lg:w-36 btn-primary
                            text-primary-content uppercase
                            transition duration-200 ease-in
                            hover:btn-secondary"
                    type="submit"
                    value="Hit It"
                />
            </form>
        </div>
    );
}

export default RandomConcertForm;