import SingleSpotCard from "../components/SingleSpotCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";


const TouristSpots = () => {
    const [allTouristSpots, setAllTouristSpots] = useState([]);
    const [urlPath, setUrlPath] = useState('https://afia-assignment-10-server.vercel.app/touristSpot');

    const handleSort = (e) => {
        const criteria = e.target.value;
        console.log(criteria)
        if (criteria === 'cost') {
            setUrlPath('https://afia-assignment-10-server.vercel.app/sortedSpot');
        }
    }

    useEffect(() => {
        fetch(`${urlPath}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllTouristSpots(data)
            })
    }, [urlPath])
    return (
        <div className="px-5 md:px-10 lg:px-14 py-3 md:py-5 lg:py-6 mb-10">
            <Helmet>
                <title>TourifyNow | All Tourist Spots</title>
            </Helmet>
            <div className="text-center mb-5">
                <h1 className="mt-3 mb-6 text-4xl font-bold text-primary">All Tourist Spots</h1>
                <select onChange={handleSort} className="p-3 text-primary font-semibold border-2 border-primary 
                hover:text-primary hover:bg-transparent hover:border-primary rounded-lg">
                    <option selected disabled>Sort By</option>
                    <option value="cost">Average Cost</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 place-items-center mt-10 lg:mt-16">
                {
                    allTouristSpots.map(spot => <SingleSpotCard key={spot._id} spot={spot}></SingleSpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;