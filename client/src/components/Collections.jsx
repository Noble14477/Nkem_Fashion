import React from "react";
import { TShirt, bag, eye, hoodie, joggers, shirt, three, two, vintage } from "../assets";
import { Link } from "react-router-dom";

const Collections = () => {
  return <div className="py-20 bg-grayBg bg-cover bg-no-repeat lg:px-16 px-6 md:px-8  relative ">
    <div className="max-w-7xl mx-auto">
        <div className=" relative py-20">
            <div className="flex-col flex justify-center md:items-center md:flex-row-reverse gap-12">
                <div className="relative ">
                    <div className="">
                        <h2 className="font-bold text-blueColor text-2xl lg:text-4xl xl:text-5xl">Native Wears</h2>
                        <p className="text-gray-600 py-3 md:text-lg">Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Blanditiis vitae quo, 
                            aut excepturi cumque voluptatum
                        </p>
                        <div className="mt-4">
                            <Link to="/" className="bg-blueColor py-3 px-6 rounded-sm text-sm text-white xl:text-lg">Shop Collection</Link>
                        </div>
                    </div>

                </div>
                <div className="w-[200px] md:w-[100%] bg-pink-200 h-[300px] md:h-[400px] xl:h-[600px] relative">
                    <img src={three} alt="" className="absolute md:-top-10 md:left-10 bottom-0 md:w-[400px]"/>
                </div>
            </div>
        </div>
        <div className="">
            <div>
                <h2 className="mb-6 font-bold text-blueColor text-2xl mt-20 pb-6 lg:text-4xl lg:text-center">Collections</h2>

            </div>

            <div className="flex justify-center items-center md:items-stretch flex-col md:flex-row flex-wrap gap-6 ">

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex  md:justify-center items-center flex-col rounded-lg">
                <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                    <img src={two} alt="vintage" className=" object-cover mx-auto"/>
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
                <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                    <img src={three} alt="vintage" className=" object-cover mx-auto"/>
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
          <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
            <img src={TShirt} alt="vintage" className=" object-cover mx-auto"/>
          </div>
          <div className="px-4 py-4">
            <p className="font-bold text-lg text-blueColor">T-shirt </p>
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
          <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
            <img src={joggers} alt="vintage" className=" object-cover mx-auto"/>
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
          <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
            <img src={vintage} alt="vintage" className=" object-cover mx-auto"/>
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
          <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
            <img src={hoodie} alt="vintage" className=" object-cover mx-auto"/>
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
          <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
            <img src={shirt} alt="vintage" className=" object-cover mx-auto"/>
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
        </div>
        </div>

    </div>
  </div>;
};

export default Collections;
