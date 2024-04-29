import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconImg from "../../public/images/icon.png"

const Navbar = () => {
    const [theme, setTheme] = useState(['light']);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }
    const { user, logOut } = useContext(AuthContext);
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
        <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
            : "border-2 border-transparent"} to="/addCountry">Add Country</NavLink></li>

    </>
    return (
        <div className="px-5 md:px-10 lg:px-14 py-3 md:py-5 lg:py-6">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            {
                                user ? <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
                                    : "border-2 border-transparent"} to="/myList">My List</NavLink></li> : ""
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-3xl font-cav text-primary ">
                        <img className="w-8" src={iconImg} alt="" /> Tourify<span className="text-[#ff494a]">Now</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-primary">
                        {links}
                        {
                            user ? <li className="bg-transparent mx-2 font-bold"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#ff494a] text-[#ff494a]"
                                : "border-2 border-transparent"} to="/myList">My List</NavLink></li> : ""
                        }
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

                        </div> :
                            <div className="flex flex-row gap-5">
                                <NavLink className="btn bg-[#ff494a] text-white text-lg border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" to="/login">Login</NavLink>
                                <NavLink className="btn bg-primary text-white text-lg border-2 border-primary 
                        hover:border-primary hover:bg-transparent hover:text-primary" to="/register">Register</NavLink>
                            </div>

                    }
                    <label className="cursor-pointer grid place-items-center ml-3">
                        <input onClick={handleToggle} type="checkbox" value="dracula" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;