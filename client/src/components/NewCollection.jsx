import React from "react";
import { Link } from "react-router-dom";
import { modelBg } from "../assets";

const NewCollection = () => {
  return <div className="relative overflow-x-hidden">
    <div className="  ">
        <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 -z-10 w-full h-[100vh]"></div>
        <img src={modelBg} alt="modelBg" className="w-full fixed object-cover top-0 bottom-0 h-[100vh] -z-20"/>
    </div>
    <div className="w-full h-[80vh] flex justify-center items-center px-6">
        <div className="text-center text-whiteColor">
            <h5 className="text-xs py-2 lg:text-md">NEW COLLECTION</h5>
            <h2 className="text-3xl font-bold tracking-wider lg:text-5xl">Be different in your own way!</h2>
            <h4 className="font-semibold tracking-wider text-lg pt-2 lg:text-2xl">Find your unique style.</h4>
            <div className="mt-6">
                <Link to="/" className="bg-pinkColor py-3 px-6 rounded-sm text-sm">Shop Collection</Link>
            </div>
        </div>
    </div>
  </div>;
};

export default NewCollection;
