import { Helmet } from "react-helmet-async";
import AllCountries from "../components/AllCountries";
import AllSpots from "../components/AllSpots";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Stats from "../components/Stats";


const Home = () => {    
    return (
        <div className="px-5 md:px-10 lg:px-14">
            <Helmet>
                <title>TourifyNow | Home</title>
            </Helmet>            
            <Banner></Banner>
            <AllSpots></AllSpots>
            <AllCountries></AllCountries>
            <Services></Services>
            <Reviews></Reviews>
            <Stats></Stats>
        </div>
    );
};

export default Home;