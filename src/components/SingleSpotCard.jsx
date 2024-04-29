import { Link } from "react-router-dom";


const SingleSpotCard = ({ spot }) => {
    const {_id, tourists_spot_name, average_cost, seasonality, travel_time, totaVisitorsPerYear, image } = spot;
    return (
        <div>
            <div className="card bg-base-100 card-compact w-96 shadow-xl">
                <figure><img className="h-64 w-full" src={image} alt="spot" /></figure>
                <div className="card-body">
                    <div className="flex flex-row justify-between items-center flex-grow h-14">
                        <h2 className="card-title font-rale font-extrabold">{tourists_spot_name}</h2>
                        <h3 className="badge text-sm font-bold bg-[#ff494a] text-white w-28 py-3">in {seasonality}</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-lg font-bold text-[#ff494a]">
                            <span className="text-primary font-semibold">Cost:</span> ${average_cost}</h3>
                        <h3 className="text-lg font-bold text-[#ff494a]">
                            <span className="text-primary font-semibold">Duration:</span> {travel_time} days</h3>
                    </div>
                    <h3 className="text-lg font-bold text-[#ff494a]">
                        <span className="text-primary font-semibold">Visitor Per Year:</span> {totaVisitorsPerYear}</h3>
                    <div className="card-actions justify-end">
                        <Link className="btn w-full bg-[#ff494a] text-white px-8 text-lg border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to={`/spots/${_id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSpotCard;