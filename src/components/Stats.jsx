import { BsPersonCheck } from "react-icons/bs";
import { BsSuitcase2 } from "react-icons/bs";
import { TbWorldShare } from "react-icons/tb";
import { LiaPlaneSolid } from "react-icons/lia";

const Stats = () => {
    return (
        <div className="mt-5 mb-20">
            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800 rounded-xl">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-[#ff494a] bg-[#00215E] 
                        text-4xl">
                            <BsPersonCheck/>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">100+</p>
                            <p className="capitalize">Clients Served</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-[#ff494a] bg-[#00215E] 
                        text-4xl">
                            <BsSuitcase2/>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">50+</p>
                            <p className="capitalize">Tours</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-[#ff494a] bg-[#00215E] 
                        text-4xl">
                            <LiaPlaneSolid/>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">10+</p>
                            <p className="capitalize">Tourist Spots</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-[#ff494a] bg-[#00215E] 
                        text-4xl">
                            <TbWorldShare/>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">6</p>
                            <p className="capitalize">Countries</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;