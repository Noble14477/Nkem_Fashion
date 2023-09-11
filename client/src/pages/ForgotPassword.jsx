import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return <div className="">
    <Navbar/>
    <div className="w-full h-[90vh] bg-cloud flex justify-center items-center">
      <div className="bg-whiteColor py-8 px-6 rounded-md drop-shadow-xl w-[90%] lg:w-[30%]">
        <div className="text-center">
        
        <p className="font-semibold text-[30px] text-blueColor">Forgot Password</p>
        <p className="text-[18px] text-gray-500">Enter your registered email</p>
        </div>
        <form className="grid gap-6 mt-12">
        
        <div className="inputGroup w-full">
            <input type="email" required/>
            <label htmlFor="name">Email</label>
        </div>
        <button className="rounded-md text-lg bg-blueColor py-3 w-full text-whiteColor mt-2">Send</button>
        </form>
      </div>
        
    </div>
  </div>;
};

export default ForgotPassword;
