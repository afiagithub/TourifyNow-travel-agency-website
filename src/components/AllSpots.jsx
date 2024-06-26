import SingleSpotCard from "../components/SingleSpotCard"
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AllSpots = () => {
    const [allTouristSpots, setAllTouristSpots] = useState([])
    useEffect(() => {
        fetch("https://afia-assignment-10-server.vercel.app/touristSpot")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllTouristSpots(data)
            })
    }, [])

    return (
        <div className="mt-16 lg:-mt-10" id="alltours">
            <div className="text-center mb-5">
                <h1 className="mt-3 mb-6 text-4xl font-bold text-primary">Tourist Spots</h1>
                <p className="text-secondary w-5/6 lg:w-3/5 mx-auto">Embark on a journey through the vibrant tapestry of
                    Southeast Asia, where ancient cultures blend seamlessly with modern marvels. Our curated selection
                    of top tourist spots offers an unforgettable glimpse into the heart and soul of this enchanting region.</p>
            </div>
            <Fade direction={"left"}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 place-items-center mt-10 lg:mt-16">
                    {
                        allTouristSpots.slice(0, 6).map(spot => <SingleSpotCard key={spot._id} spot={spot}></SingleSpotCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default AllSpots;