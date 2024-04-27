import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSigOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            })
    }
    const links = <>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
            : "border-2 border-transparent "} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
            : "border-2 border-transparent"} to="/spots">Destinations</NavLink></li>
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
            : "border-2 border-transparent"} to="/addSpots">Add Tourist Spot</NavLink></li>

    </>
    return (
        <div className="px-5 md:px-10 lg:px-14 py-3 md:py-5 lg:py-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-3xl font-cav text-[#00215E]">
                        Tourify<span className="text-[#ff494a]">Now</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#00215E]">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-row gap-3">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <button><img className="w-12 h-12 rounded-full" src={user.photoURL || 'https://i.ibb.co/QnTrVRz/icon.jpg'} alt="" /></button>
                            </div>
                            <NavLink onClick={handleSigOut} className="btn bg-[#ff494a] text-white px-4 border-2 border-[#ff494a] 
                    hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to="/">LogOut</NavLink>

                        </div>:
                        <NavLink className="btn bg-[#ff494a] text-white px-8 text-lg border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to="/login">Login</NavLink>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;