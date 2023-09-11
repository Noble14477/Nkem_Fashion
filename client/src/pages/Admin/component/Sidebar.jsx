import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { add, speed } from "../../../assets";
import { MdLogout } from "react-icons/md";
import { logout } from "../../../constants/auth";

const Sidebar = ({sidebarSlide}) => {
  const navigate = useNavigate();

  const handelLogout = () => {
      logout(() => {
        navigate("/", { replace: true });
      });
    };


  return (
    <div className=" text-whiteColor h-[100vh] bg-gradient-to-r from-darkColor to-blueColor px-2 md:px-4 py-6 relative">
      <div>
        <h1 className="font-bold text-2xl xl:text-4xl text-whiteColor">NFE.</h1>
      </div>
      <div className="grid mt-10 gap-6 text-md">
        <div className="flex items-center gap-3 font-semibold hover:bg-pinkColor py-2 px-2 rounded-md hover:text-whiteColor duration-150 ease-in-out">
            <img src={speed} alt="dahboard" className="w-[30px]"/>
            <Link to="/admin-dashboard">Dashboard</Link>
        </div>
        <div className="flex items-center gap-3 font-semibold hover:bg-pinkColor py-2 px-2 rounded-md hover:text-whiteColor duration-150 ease-in-out">
            <img src={add} alt="add" className="w-[30px]"/>
            <Link to="/category">Category</Link>
        </div>
        <div className="flex items-center gap-3 font-semibold hover:bg-pinkColor py-2 px-2 rounded-md hover:text-whiteColor duration-150 ease-in-out">
            <img src={add} alt="add" className="w-[30px]"/>
            <Link to="/products">Products</Link>
        </div>
        <div onClick={handelLogout} className="flex items-center gap-3 font-semibold hover:bg-pinkColor py-2 px-2 rounded-md hover:text-whiteColor duration-150 ease-in-out">
            <MdLogout className="text-2xl"/>
            <button >Logout</button>
        </div>
      </div>
      <p className=" text-xs font-semibold text-gray-200 text-center absolute bottom-6">Copyright © 2023 Nfs | Powered by Noble Chinonso</p>

    </div>
  );
};

export default Sidebar;
