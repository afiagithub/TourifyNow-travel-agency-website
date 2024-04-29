import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SpotAttach = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const handleAddSpot = (event) => {
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
        const user_email = user.email || user.uid;

        const newTouristSpot = {
            tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time,
            totaVisitorsPerYear, short_description, image, user_name, user_email
        };

        fetch("https://afia-assignment-10-server.vercel.app/touristSpot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Added New Tourist Spot",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10">
            <Helmet>
                <title>TourifyNow | Add Tourist Spot</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-primary">Add Tourist Spot</h1>
                <p className="text-sm dark:text-secondary">Provide all necessary information below</p>
            </div>
            <form onSubmit={handleAddSpot}>
                <div className="w-full flex flex-col gap-5">
                    <div className="flex gap-3">
                        <input type="text" name="tourists_spot_name" placeholder="Enter Place Name"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="text" name="country_Name" placeholder="Enter Country"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name="location" placeholder="Enter location"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="number" name="average_cost" placeholder="Cost Per Stay"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <select name="seasonality" className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" >
                            <option selected disabled>Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                        </select>
                        <input type="text" name="travel_time" placeholder="Enter Stay Duration"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div className="flex gap-3">
                        <input type="number" name="totaVisitorsPerYear" placeholder="Enter Total Visitor Limit"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                        <input type="text" name="image" placeholder="Enter Image URL"
                            className="w-1/2 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    </div>
                    <div>
                        <textarea name="short_description" cols="30" rows="5" placeholder="Write a short description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add Tourist Spot"
                        className="w-full px-8 py-3 mt-3 bg-[#ff494a] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#ff494a] hover:border-[#ff494a] hover:bg-transparent 
                            hover:text-[#ff494a]" />
                </div>
            </form>
        </div>
    );
};

export default SpotAttach;