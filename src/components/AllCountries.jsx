import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AllCountries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://afia-assignment-10-server.vercel.app/countryList")
            .then(res => res.json())
            .then(data => {                
                setCountries(data)
            })
    }, [])

    return (
        <div className="mt-16 lg:mt-20" id="allCountry">
            <div className="text-center mb-5">
                <h1 className="mt-3 mb-6 text-4xl font-bold text-primary">Countries</h1>
                <p className="dark:text-secondary w-5/6 lg:w-3/5 mx-auto">Whether you're seeking adventure,
                    relaxation, or cultural immersion, Southeast Asia beckons with endless possibilities for exploration
                    and discovery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 place-items-center mt-10 lg:mt-16">
                {
                    countries.map(country => <NavLink to={`/countryBasedSpot/${country.name}`} key={country._id} className="card w-96 h-80 bg-base-100 
                    shadow-xl image-full">
                        <figure><img src={country.image} alt="country" /></figure>
                        <div className="card-body items-center text-center mt-20">
                            <Fade direction={"down"}>
                                <h2 className="card-title text-2xl font-rale text-[#ff494a]">{country.name}</h2>
                            </Fade>
                            <Fade direction={"up"}>
                                <p className="text-gray-200">{country.short_description}</p>
                            </Fade>
                        </div>
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default AllCountries;