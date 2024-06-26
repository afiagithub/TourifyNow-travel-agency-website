import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';

const SpotDetails = () => {
    const tourSpot = useLoaderData()
    console.log(tourSpot)
    const { tourists_spot_name, country_Name, average_cost, location, short_description, user_name, seasonality,
        travel_time, totaVisitorsPerYear, image } = tourSpot;
    return (
        <div className="hero w-[90%] mx-auto lg:mt-5 text-primary mb-10">
            <Helmet>
                <title>TourifyNow | Tourist Spot Details</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row lg:justify-start lg:items-start gap-10">
                <div className="lg:w-1/2 mx-auto flex flex-col justify-center rounded-3xl">
                    <img src={image} className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="lg:w-3/5">
                    <h1 className="text-4xl font-bold font-play">{tourists_spot_name}</h1>
                    <div className="w-4/5 flex flex-row justify-between items-center">
                        <p className="text-lg pb-3 mt-3 mb-4 text-[#ff494a]"><span className="text-primary font-bold">Country: </span>
                            {country_Name}</p>
                        <p className="text-lg pb-3 mt-3 mb-4 text-[#ff494a]"><span className="text-primary font-bold">Location: </span>
                            {location}</p>
                    </div>
                    <p className="py-3 px-2 font-bold w-full bg-[#ff494a] text-white rounded-xl">Description</p>
                    <p className="py-3 px-3"><span className="font-bold"></span> {short_description}...</p>

                    <p className="py-3 px-2 font-bold w-full bg-[#ff494a] text-white rounded-xl mt-8">Tour Details</p>
                    <div className="details lg:w-3/5 my-6 flex lg:justify-between">
                        <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                            <p>Travel Duration:</p>
                            <p>Cost:</p>

                        </div>
                        <div className="pages font-bold space-y-2">
                            <p>{travel_time} days</p>
                            <p>${average_cost}</p>
                        </div>
                    </div>

                    <p className="py-3 px-2 font-bold w-full bg-[#ff494a] text-white rounded-xl mt-8">Other Details</p>

                    <div className="details lg:w-3/5 my-6 flex lg:justify-between">
                        <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                            <p>Season:</p>
                            <p>Visitors Per Year:</p>
                            <p>Added By: </p>

                        </div>
                        <div className="pages font-bold space-y-2">
                            <p>{seasonality}</p>
                            <p>{totaVisitorsPerYear}</p>
                            <p>{user_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SpotDetails.propTypes = {
    tourists_spot_name: PropTypes.string,
    country_Name: PropTypes.string,
    location: PropTypes.string,
    short_description: PropTypes.string,
    average_cost: PropTypes.string,
    seasonality: PropTypes.string,
    travel_time: PropTypes.string,
    totaVisitorsPerYear: PropTypes.string,
    image: PropTypes.string,
}

export default SpotDetails;