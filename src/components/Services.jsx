import { TiPointOfInterest } from "react-icons/ti";
import serviceImg from "../../public/images/service.jpg"

const Services = () => {
    return (
        <div className="mt-5 md:mt-7 lg:mt-10">
            <div className="container p-6 py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                <div className="text-center mb-5">
                    <h1 className="mt-3 mb-6 text-4xl font-bold text-[#00215E]">Our Services</h1>
                    <p className="dark:text-gray-600 w-5/6 lg:w-3/5 mx-auto">Embark on a journey through the vibrant tapestry of
                        Southeast Asia, where ancient cultures blend seamlessly with modern marvels. Our curated selection
                        of top tourist spots offers an unforgettable glimpse into the heart and soul of this enchanting region.</p>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-[#00215E]">
                                        Guided Tours and Activities</h4>
                                    <p className="mt-2">
                                        Dive deep into the rich tapestry of Southeast Asian culture with our guided tours
                                        and activities led by local guides. Explore ancient temples, embark
                                        on jungle treks, sample famous street food, and immerse yourself in
                                        authentic cultural experiences.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-[#00215E]">
                                        Accommodation Booking</h4>
                                    <p className="mt-2">
                                        Discover a diverse selection of accommodations ranging from luxurious resorts
                                        to cozy homestays. With our extensive network of partners, you are sure to
                                        find the perfect place to rest.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 text-[#00215E]">
                                        Travel Insurance and Support</h4>
                                    <p className="mt-2">
                                    Travel with peace of mind knowing that you're covered by comprehensive travel 
                                    insurance and supported by our dedicated customer service team every step of 
                                    the way.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={serviceImg} alt="" className="object-cover mx-auto rounded-lg shadow-lg h-[80vh] w-5/6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;