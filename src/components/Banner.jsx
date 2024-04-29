import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';
import "../custom.css"

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper">
                <SwiperSlide>
                    <div className="slider slider1 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">Discover the Rich Tapestry of
                            <span className="text-[#ff494a] text-4xl md:text-5xl lg:text-7xl font-black font-cav"> Southeast Asia</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider2 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">From 
                            <span className="text-[#ff494a] text-4xl md:text-5xl lg:text-6xl font-black font-cav"> Lush Rainforests </span>
                             to 
                            <span className="text-[#ff494a] text-4xl md:text-5xl lg:text-6xl font-black font-cav"> Pristine Beaches</span>
                            </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider3 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary"> 
                            <span className="text-[#ff494a] text-4xl md:text-5xl lg:text-7xl font-black font-cav"> Indulge </span>
                            in Authentic Cuisine and Cultural Delights</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider4 flex flex-col items-center justify-center lg:justify-start">
                        <h1 className="lg:mt-24 text-center text-3xl md:text-4xl lg:text-5xl 
                        font-bold w-4/5 lg:w-3/5 capitalize text-primary">Your Southeast Asian
                            <span className="text-[#ff494a] text-4xl md:text-5xl lg:text-7xl font-black font-cav"> Odyssey </span>
                            Begins Here</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="group flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-center w-5/6 
            lg:w-3/5 mx-auto border-4 border-[#ff494a] p-3 
            rounded-2xl bg-[#ff494a66] my-5 lg:my-0 lg:-translate-y-40">
                <div className="p-6 border-2 lg:border-r-0 border-primary bg-white 
                rounded-xl lg:rounded-r-none w-full">
                    <select className="bg-white">
                        <option selected disabled>Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Cambodia">Cambodia</option>
                    </select>
                </div>
                <div className="w-full p-2 border-2 lg:border-r-0 border-primary bg-white rounded-xl lg:rounded-none">
                    <input type="text" placeholder="Place Name" className="py-4 bg-white" />
                </div>
                <div className="w-full p-6 border-2 border-primary bg-white rounded-xl lg:rounded-l-none">
                    <select className="bg-white">
                        <option selected disabled>Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>
                <div className="p-4">
                    <input type="button"
                        className="btn bg-[#ff494a] text-white px-8 text-lg border-2 border-[#ff494a] 
                        hover:border-[#ff494a] hover:bg-transparent hover:text-[#ff494a]" value="Find Now" />
                </div>
            </div>
        </div>
    );
};

export default Banner;