import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateSpot = () => {
    const tourSpot = useLoaderData()
    console.log(tourSpot)
    const { _id, tourists_spot_name, country_Name, average_cost, location, short_description, seasonality,
        travel_time, totaVisitorsPerYear, image } = tourSpot;

    const { user } = useContext(AuthContext);
    console.log(user)
    const handleUpdateSpot = (event) => {
        event.preventDefault();
        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const short_description = form.short_description.value;
        const image = form.image.value;
        const user_name = user.displayName;
        const user_email = user.email;

        const updatedTouristSpot = {
            tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time,
            totaVisitorsPerYear, short_description, image, user_name, user_email
        };

        fetch(`http://localhost:5000/touristSpot/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Updated Tourist Spot",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10">
            <Helmet>
                <title>TourifyNow | Update Tourist Spot</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-primary">Add Tourist Spot</h1>
                <p className="text-sm dark:text-secondary">Provide all necessary information below</p>
            </div>
            <form onSubmit={handleUpdateSpot}>
                <div className="w-full flex flex-col gap-5">
                    <div className="flex gap-3">
                        <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="text" name="country_Name" defaultValue={country_Name}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name="location" defaultValue={location}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="number" name="average_cost" defaultValue={average_cost}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <select name="seasonality" className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                            <option defaultValue={seasonality} disabled>Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                        </select>
                        <input type="text" name="travel_time" defaultValue={travel_time}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <input type="number" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="text" name="image" defaultValue={image}
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="short_description" cols="30" rows="5" defaultValue={short_description}
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update Tourist Spot"
                        className="w-full px-8 py-3 mt-3 bg-[#ff494a] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#ff494a] hover:border-[#ff494a] hover:bg-transparent 
                            hover:text-[#ff494a]" />
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;