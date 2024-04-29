import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const MyList = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [items, setItems] = useState([]);
    const criteria = user.email || user.uid;
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${criteria}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [user])

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/touristSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const restItems = items.filter(item => item._id !== _id)
                            setItems(restItems)
                            console.log(data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tourist Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="px-5 md:px-10 lg:px-16 py-3 md:py-5 lg:py-6 mb-10">
            <Helmet>
                <title>TourifyNow | My List</title>
            </Helmet>
            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-rale lg:text-lg">
                            <th></th>
                            <th>Tourist Spot</th>
                            <th>Country</th>
                            <th>Cost</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => <tr key={item._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{item.tourists_spot_name}</td>
                                <td>{item.country_Name}</td>
                                <td>{item.average_cost}</td>
                                <td>{item.travel_time} days</td>
                                <td>
                                    <Link className="btn bg-primary text-white border-2 border-primary 
                        hover:border-primary hover:bg-transparent hover:text-primary" to={`/update/${item._id}`}>Update</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-[#ff494a] text-white border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;