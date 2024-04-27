import AllSpots from "../components/AllSpots";
import Banner from "../components/Banner";


const Home = () => {
    return (
        <div className="px-5 md:px-10 lg:px-14">
            <Banner></Banner>
            <AllSpots></AllSpots>
        </div>
    );
};

export default Home;