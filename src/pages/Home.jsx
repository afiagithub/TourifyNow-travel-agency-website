import AllSpots from "../components/AllSpots";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Services from "../components/Services";


const Home = () => {
    return (
        <div className="px-5 md:px-10 lg:px-14">
            <Banner></Banner>
            <AllSpots></AllSpots>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;