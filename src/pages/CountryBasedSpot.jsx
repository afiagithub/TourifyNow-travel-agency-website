import { Link, useLoaderData } from "react-router-dom";


const CountryBasedSpot = () => {
    const countrySpots = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 place-items-center mt-5 lg:mt-10">
            {
                countrySpots.map(spot => <div key={spot._id} className="card card-compact w-96 shadow-xl">
                    <figure><img className="h-64 w-full" src={spot.image} alt="spot" /></figure>
                    <div className="card-body">
                        <div className="flex flex-row justify-between items-center flex-grow h-14">
                            <h2 className="card-title font-rale font-extrabold">{spot.tourists_spot_name}</h2>
                            <h3 className="badge text-sm font-bold bg-[#ff494a] text-white w-28 py-3">in {spot.seasonality}</h3>
                        </div>
                        <p>{spot.short_description}</p>
                        <h3 className="text-lg font-bold text-[#ff494a]">
                            <span className="text-[#00215E] font-semibold">Country:</span> {spot.country_Name}</h3>
                        <h3 className="text-lg font-bold text-[#ff494a]">
                            <span className="text-[#00215E] font-semibold">Location:</span> {spot.location}</h3>
                        <h3 className="text-lg font-bold text-[#ff494a]">
                            <span className="text-[#00215E] font-semibold">Cost:</span> ${spot.average_cost}</h3>
                        <div className="card-actions justify-end">
                            <Link className="btn w-full bg-[#ff494a] text-white px-8 text-lg border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to={`/spots/${spot._id}`}>View Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CountryBasedSpot;