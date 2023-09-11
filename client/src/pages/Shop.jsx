import React from "react";
import Navbar from "../components/Navbar";
import { bag, eye, shirt } from "../assets";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-grayColor pt-10">
        <div className="grid md:grid-cols-4">
          <div className="col-span-1">search</div>
          <div className="col-span-3 flex justify-center items-center md:items-stretch flex-col md:flex-row flex-wrap gap-4">

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-whiteColor drop-shadow-xl max-w-[300px] flex justify-center items-center flex-col rounded-lg">
              <div className="pb-2 drop-shadow-2xl w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={shirt}
                  alt="vintage"
                  className=" object-cover mx-auto"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-bold text-lg text-blueColor">
                  DesubClassic Nice Men Native Wear -grey{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Brand: DesubClassic | Similar products from DesubClassic
                </p>
                <div className="mt-2">
                  <span className="font-semibold text-lg text-blueColor">
                    $79.49
                  </span>
                  <span className="text-md text-pinkColor float-right">
                    In Stock
                  </span>
                </div>
                <div className="flex justify-center items-center w-full mt-2  gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-pinkColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    Add to cart <img src={bag} alt="bag" className="w-[25px]" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-blueColor w-full rounded-md text-whiteColor py-2 text-sm"
                  >
                    View <img src={eye} alt="bag" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
