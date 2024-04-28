import { useEffect, useState } from "react";

const AllCountries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/countryList")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountries(data)
            })
    }, [])

    return (
        <div className="mt-5 md:mt-8 lg:mt-20">
            <div className="text-center mb-5">
                <h1 className="mt-3 mb-6 text-4xl font-bold text-[#00215E]">Countries</h1>
                <p className="dark:text-gray-600 w-5/6 lg:w-3/5 mx-auto">Embark on a journey through the vibrant tapestry of
                    Southeast Asia, where ancient cultures blend seamlessly with modern marvels. Our curated selection
                    of top tourist spots offers an unforgettable glimpse into the heart and soul of this enchanting region.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 place-items-center mt-10 lg:mt-16">
                {
                    countries.map(country => <div key={country._id} className="card w-96 h-80 bg-base-100 
                    shadow-xl image-full">
                        <figure><img src={country.image} alt="country" /></figure>
                        <div className="card-body items-center text-center mt-20">
                            <h2 className="card-title text-2xl font-rale">{country.name}</h2>
                            <p>{country.short_description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCountries;