import React from "react";
import {FaStar} from "react-icons/fa"

const Reviews = () => {
  return <div className="bg-whiteColor py-20 lg:px-16 px-6 md:px-8">
    <div className="max-w-7xl mx-auto ">
        <h3 className="font-bold text-blueColor text-2xl lg:text-4xl lg:text-center">Reviews</h3>
        <p className="text-gray-600 lg:text-xl lg:text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>

        <div className="mt-10 lg:mt-20 flex justify-center items-center flex-col lg:flex-row gap-6">

            <div className="drop-shadow-2xl bg-whiteColor p-4 rounded-lg">
                <p className="text-sm text-gray-600 lg:text-lg">
                    “ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”
                </p>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                </div>
                <p className="font-bold text-blueColor lg:text-lg">John Doe</p>
            </div>

            <div className="drop-shadow-2xl bg-whiteColor p-4 rounded-lg">
                <p className="text-sm text-gray-600 lg:text-lg">
                    “ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”
                </p>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                </div>
                <p className="font-bold text-blueColor lg:text-lg">John Doe</p>
            </div>
            
            <div className="drop-shadow-2xl bg-whiteColor p-4 rounded-lg">
                <p className="text-sm text-gray-600 lg:text-lg">
                    “ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”
                </p>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                    <span className="text-yellow-500"><FaStar/></span>
                </div>
                <p className="font-bold text-blueColor lg:text-lg">John Doe</p>
            </div>

        </div>
    </div>
  </div>;
};

export default Reviews;
