import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className="my-7 md:my-7 lg:my-16">
            <div className="text-center mb-5">
                <h1 className="mt-3 mb-10 text-4xl font-bold text-primary">What Our Clients Say</h1>
            </div>
            <Swiper navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper">
                <SwiperSlide>
                    <div className="hero rounded-xl bg-[url(../../public/images/cool-background.png)]">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl py-5 lg:py-10">
                                <img className="rounded-full w-28 h-28 mx-auto mb-8"
                                    src="https://i.ibb.co/WD6nVhk/agent5.jpg" alt="" />
                                <h1 className="text-3xl font-bold font-rale text-gray-200">Sarah Johnson</h1>
                                <div className="rating mt-3 mb-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>

                                <p className="mb-5 text-sm text-gray-200">I recently booked a tour package to Thailand,
                                    and I couldn't be happier with the experience! From the moment we landed in Bangkok
                                    to our last day in Phuket, everything was meticulously planned and executed.
                                    I highly recommend TourifyNow to anyone looking for
                                    a seamless and memorable travel experience.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero rounded-xl bg-[url(../../public/images/cool-background.png)]">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl py-5 lg:py-10">
                                <img className="rounded-full w-28 h-28 mx-auto mb-8"
                                    src="https://i.ibb.co/1r5gxwx/agent3.jpg" alt="" />
                                <h1 className="text-3xl font-bold font-rale text-gray-200">David Lee</h1>
                                <div className="rating mt-3 mb-5 mx-auto">
                                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked/>
                                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                </div>

                                <p className="mb-5 text-sm text-gray-200">I booked a solo trip to Vietnam and Cambodia through TourifyNow 
                                platform, and it was truly a transformative experience. The accommodations were 
                                top-notch, the guided tours were insightful, and the local cuisine was absolutely 
                                delicious. What impressed me the most was their commitment to sustainability and 
                                responsible tourism practices.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero rounded-xl bg-[url(../../public/images/cool-background.png)]">
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl py-5 lg:py-10">
                                <img className="rounded-full w-28 h-28 mx-auto mb-8 object-cover"
                                    src="https://i.ibb.co/W0pdpmx/agent2.jpg" alt="" />
                                <h1 className="text-3xl font-bold font-rale text-gray-200">Emily Chen</h1>
                                <div className="rating mt-3 mb-5">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked />
                                </div>

                                <p className="mb-5 text-sm text-gray-200">My friends and I booked a last-minute getaway to Bali 
                                through TourifyNow, and it was hands down the best decision we made! Despite the 
                                short notice, the team at TourifyNow worked tirelessly to accommodate our preferences 
                                and ensure that every aspect of our trip was taken care of.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;