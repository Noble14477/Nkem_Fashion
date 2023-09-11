import React from "react";
import { bag, eye, hoodie, joggers, one, vintage } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideIn } from "../constant";

const SubHero = () => {
  return (
    <div className="bg-grayColor py-20 lg:px-16 px-6 md:px-8">
      <h2 className="  mb-6 font-bold text-blueColor text-2xl lg:text-4xl xl:text-center pb-6">New Arrivals</h2>
      <div className="max-w-7xl mx-auto flex justify-center items-center md:items-stretch flex-col md:flex-row flex-wrap gap-6">

        <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
          <div className="py-2 drop-shadow-2xl w-full ">
            <img src={vintage} alt="vintage" className=" object-cover w-[200px] rounded-full mx-auto"/>
          </div>
          <div className="px-4 py-4">
            <p className="font-bold text-lg text-blueColor">Vintage T-shirt </p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit Provident...</p>
          <div className="mt-2">
            <span className="font-semibold text-lg text-blueColor">$499.49</span>
            <span className="text-md text-pinkColor float-right">In Stock</span>
          </div>
          <div className="flex justify-center items-center w-full mt-2  gap-2">
            <Link to="/" className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm">Add to cart <img src={bag} alt="bag" className="w-[25px]"/></Link>
            <Link to="/" className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm">View <img src={eye} alt="bag" className="w-[25px]"/></Link>
          </div>
          </div>
        </div>

        <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
          <div className="py-2 drop-shadow-2xl w-full ">
            <img src={one} alt="vintage" className=" object-cover w-[200px] rounded-full mx-auto"/>
          </div>
          <div className="px-4 py-4">
            <p className="font-bold text-lg text-blueColor">DesubClassic Nice Men Native Wear -grey </p>
            <p className="text-sm text-gray-600">Brand: DesubClassic | Similar products from DesubClassic</p>
          <div className="mt-2">
            <span className="font-semibold text-lg text-blueColor">$79.49</span>
            <span className="text-md text-pinkColor float-right">In Stock</span>
          </div>
          <div className="flex justify-center items-center w-full mt-2  gap-2">
            <Link to="/" className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm">Add to cart <img src={bag} alt="bag" className="w-[25px]"/></Link>
            <Link to="/" className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm">View <img src={eye} alt="bag" className="w-[25px]"/></Link>
          </div>
          </div>
        </div>
        
        <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
          <div className="py-2 drop-shadow-2xl w-full ">
            <img src={hoodie} alt="vintage" className=" object-cover w-[200px] rounded-full mx-auto"/>
          </div>
          <div className="px-4 py-4">
            <p className="font-bold text-lg text-blueColor">Hoodie </p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit Provident...</p>
          <div className="mt-2">
            <span className="font-semibold text-lg text-blueColor">$209.49</span>
            <span className="text-md text-pinkColor float-right">In Stock</span>
          </div>
          <div className="flex justify-center items-center w-full mt-2  gap-2">
            <Link to="/" className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm">Add to cart <img src={bag} alt="bag" className="w-[25px]"/></Link>
            <Link to="/" className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm">View <img src={eye} alt="bag" className="w-[25px]"/></Link>
          </div>
          </div>
        </div>

        <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
          <div className="py-2 drop-shadow-2xl w-full ">
            <img src={joggers} alt="vintage" className=" object-cover w-[200px] rounded-full mx-auto"/>
          </div>
          <div className="px-4 py-4">
            <p className="font-bold text-lg text-blueColor">Joggers </p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit Provident...</p>
          <div className="mt-2">
            <span className="font-semibold text-lg text-blueColor">$199.49</span>
            <span className="text-md text-pinkColor float-right">In Stock</span>
          </div>
          <div className="flex justify-center items-center w-full mt-2  gap-2">
            <Link to="/" className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm">Add to cart <img src={bag} alt="bag" className="w-[25px]"/></Link>
            <Link to="/" className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm">View <img src={eye} alt="bag" className="w-[25px]"/></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
