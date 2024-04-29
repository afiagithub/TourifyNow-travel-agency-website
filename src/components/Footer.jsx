import { Link } from "react-router-dom";
import iconImg from "../../public/images/icon.png"
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Footer = () => {
    return (
        <div className="bg-[#00215e33]">
            <footer className="footer text-base-content px-5 md:px-10 lg:px-14 py-3 md:py-5 lg:py-16">
                <aside>
                    <Link to="/" className="btn btn-ghost text-3xl font-cav text-primary">
                        <img className="w-8" src={iconImg} alt="" /> TourifyNow Ltd.</Link>
                    <p>Crafting Memories, One Trip at a Time</p>
                </aside>
                <nav>
                    <h6 className="text-xl text-[#ff494a] font-bold">Pages</h6>
                    <a className="link link-hover" href="/about">About Us</a>
                    <a className="link link-hover" href="/spots">Tourist Spots</a>
                    <a className="link link-hover" href="/#allCountry">Countries</a>
                    <a className="link link-hover" href="/#service">Services</a>
                    <a className="link link-hover" href="/about">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-[#ff494a] font-bold">Company</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-[#ff494a] font-bold">Social Links</h6>
                    <div className="flex flex-row gap-5 items-center">
                        <a href="#" className="link link-hover text-lg" data-tooltip-id="fb-tool"
                            data-tooltip-content="https://www.facebook.com/tourify/"
                            data-tooltip-place="top">
                            <FaFacebookF />
                        </a>
                        <Tooltip id="fb-tool" />
                        <a href="#" className="link link-hover text-lg" data-tooltip-id="twitter-tool"
                            data-tooltip-content="https://www.twitter.com/tourify/"
                            data-tooltip-place="top">
                            <GrTwitter />
                        </a>
                        <Tooltip id="twitter-tool" />
                        <a href="#" className="link link-hover text-lg" data-tooltip-id="insta-tool"
                            data-tooltip-content="https://www.instagram.com/tourify/"
                            data-tooltip-place="top">
                            <FaInstagram />
                        </a>
                        <Tooltip id="insta-tool" />
                    </div>
                </nav>
            </footer>
            <div className="text-center w-full pb-2 mt-10 lg:mt-0">
                <p>Copyright © 2024 - All right reserved by TourifyNow Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;