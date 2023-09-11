import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <div className="bg-blueColor p-6">
    <div className="max-w-7xl mx-auto">
        <div className="py-6 flex flex-col lg:flex-row gap-2 justify-between lg:items-center">
        <h1 className="font-bold text-3xl xl:text-5xl text-whiteColor">
            NFE.
          </h1>
            <div className="flex flex-col lg:flex-row gap-2 mt-10 text-whiteColor text-sm">
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            </div>
        </div>
        <p className="text-sm text-whiteColor font-light text-center">Copyright © 2023 Nfs | Powered by Noble Chinonso</p>
    </div>
  </div>;
};

export default Footer;