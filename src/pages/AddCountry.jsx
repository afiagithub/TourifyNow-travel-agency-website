import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const AddCountry = () => {
    const handleAddCountry = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const short_description = form.short_description.value;
        const image = form.image.value;

        const newTouristSpot = {name, short_description, image};

        fetch("http://localhost:5000/countryList", {
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
                        text: "Added Country",
                        icon: "success"
                    });
                    form.reset();                    
                }
            })            
    }
    return (
        <div className="flex flex-col max-w-2xl mx-auto p-6 rounded-md sm:p-10 mb-10">
            <Helmet>
                <title>TourifyNow | Add Country</title>
            </Helmet>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-primary">Add Country</h1>
                <p className="text-sm dark:text-secondary">Provide all necessary information below</p>
            </div>
            <form onSubmit={handleAddCountry}>
                <div className="w-full flex flex-col gap-5">
                    <input type="text" name="name" placeholder="Enter Country Name"
                        className="px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    <input type="text" name="image" placeholder="Enter Image URL"
                        className="px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50" />
                    <div>
                        <textarea name="short_description" cols="30" rows="5" placeholder="Write a short description"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50"></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add Country"
                        className="w-full px-8 py-3 mt-3 bg-[#ff494a] text-white text-lg font-semibold rounded-xl 
                            border-2 border-[#ff494a] hover:border-[#ff494a] hover:bg-transparent 
                            hover:text-[#ff494a]" />
                </div>
            </form>
        </div>
    );
};

export default AddCountry;