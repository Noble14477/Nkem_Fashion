import React from "react";
import { hoodie } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { slideIn, slideOut } from "../constant";

const Hero = () => {
  return <div  className="bg-heroBack w-full h-[90vh] bg-no-repeat bg-cover overflow-x-hidden">
    <div className="pt-20 px-6 lg:px-16 xl:px-0 max-w-7xl mx-auto flex justify-center items-center flex-col lg:flex-row h-[80vh]">
        <motion.div className='w-full' variants={slideIn} animate={slideIn.visible} initial={slideIn.hidden}>
            <h1 className=" text-3xl text-blueColor xl:text-5xl">Get up to 30% Off <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-pinkColor font-bold text-4xl xl:text-7xl">New Arrivals</span> </h1>
            <motion.p variants={slideIn} animate={slideIn.visible} initial={slideIn.hidden} className="mt-4 leading-6 text-gray-500 lg:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Vero labore mollitia laudantium obcaecati voluptatum error 
                perspiciatis suscipit ut reprehenderit eos!</motion.p>

                <motion.div variants={slideIn} animate={slideIn.visible} initial={slideIn.hidden} className="my-5">
                    <Link to="/shop" className="bg-blueColor text-whiteColor rounded-lg px-8 py-3 xl:text-xl">Shop Now</Link>

                </motion.div>
        </motion.div>
        <motion.div variants={slideOut} animate={slideOut.visible} initial={slideOut.hidden} className="flex justify-center items-center w-full ">
            <img src={hoodie} alt="hoodie" className="drop-shadow-2xl w-[300px] lg:w-[80%] 2xl:w-full hover:scale-110 duration-200 ease-in-out"/>
        </motion.div>
    </div>
  </div>;
};

export default Hero;
