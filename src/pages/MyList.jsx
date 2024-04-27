import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const MyList = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [user])
    return (
        <div className="px-5 md:px-10 lg:px-16 py-3 md:py-5 lg:py-6">
            <div className="overflow-x-auto w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-rale text-lg">
                            <th></th>
                            <th>Tourist Spot</th>
                            <th>Country</th>
                            <th>Cost</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map((item, idx) => <tr key={item._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{item.tourists_spot_name}</td>
                                <td>{item.country_Name}</td>
                                <td>{item.average_cost}</td>
                                <td>{item.travel_time} days</td>
                                <td>
                                    <Link className="btn bg-[#00215E] text-white border-2 border-[#00215E] 
                        hover:border-[#00215E] hover:bg-transparent hover:text-[#00215E]" to={`/update/${item._id}`}>Update</Link>
                                </td>
                                <td>
                                    <Link className="btn bg-[#ff494a] text-white border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to={`/delete/${item._id}`}>Delete</Link>
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