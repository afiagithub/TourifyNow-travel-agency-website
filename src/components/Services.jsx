import { TiPointOfInterest } from "react-icons/ti";
import serviceImg from "../../public/images/service.jpg"
import { Fade } from "react-awesome-reveal";

const Services = () => {
    return (
        <div className="my-2 md:my-7 lg:my-10" id="service">
            <div className="container p-6 py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                <div className="text-center mb-5">
                    <h1 className="mt-3 mb-6 text-4xl font-bold text-primary">Our Services</h1>
                    <p className="dark:text-secondary w-5/6 lg:w-3/5 mx-auto">At TourifyNow, we're dedicated to
                        providing you with unparalleled access to the wonders of Southeast Asia. Our platform offers a
                        comprehensive range of services designed to cater to every aspect of your travel experience,
                        ensuring that your journey is seamless and memorable.</p>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <Fade direction="right">
                                        <h4 className="text-lg font-bold font-rale leading-6 text-primary">
                                            Guided Tours and Activities</h4>
                                    </Fade>
                                    <Fade direction="up">
                                        <p className="mt-2">
                                            Dive deep into the rich tapestry of Southeast Asian culture with our guided tours
                                            and activities led by local guides. Explore ancient temples, embark
                                            on jungle treks, sample famous street food, and immerse yourself in
                                            authentic cultural experiences.</p>
                                    </Fade>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <Fade direction="right">
                                        <h4 className="text-lg font-bold font-rale leading-6 text-primary">
                                            Accommodation Booking</h4>
                                    </Fade>
                                    <Fade direction="up">
                                        <p className="mt-2">
                                            Discover a diverse selection of accommodations ranging from luxurious resorts
                                            to cozy homestays. With our extensive network of partners, you are sure to
                                            find the perfect place to rest.</p>
                                    </Fade>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TiPointOfInterest className="text-5xl text-[#ff494a]" />
                                </div>
                                <div className="ml-4">
                                    <Fade direction="right">
                                        <h4 className="text-lg font-bold font-rale leading-6 text-primary">
                                            Travel Insurance and Support</h4>
                                    </Fade>
                                    <Fade direction="up">
                                        <p className="mt-2">
                                            Travel with peace of mind knowing that you're covered by comprehensive travel
                                            insurance and supported by our dedicated customer service team every step of
                                            the way.</p>
                                    </Fade>
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