import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { add } from "../../../assets";

const Main = ({ onclick }) => {
  return (
    <div>
      <div className="bg-grayColor rounded-2xl h-[95vh] overflow-y-auto">
        <div className="mx-4 pt-4">
          <MdMenu
            className="text-4xl text-blueColor cursor-pointer"
            onClick={onclick}
          />
        </div>
        <div className="mt-10 flex justify-center gap-6 items-center px-4 md:px-10 flex-col lg:flex-row">
          <div className="w-full flex justify-center items-center gap-2 font-semibold bg-pinkColor text-whiteColor py-4 px-2 rounded-md hover:scale-90 duration-150 ease-in-out">
            <img src={add} alt="add" className="w-[30px]" />
            <Link to="/category">Category</Link>
          </div>
          <div className="w-full flex justify-center items-center gap-2 font-semibold bg-green-500 text-whiteColor py-4 px-2 rounded-md hover:scale-90 duration-150 ease-in-out">
            <img src={add} alt="add" className="w-[30px]" />
            <Link to="/products">Product</Link>
          </div>
        </div>
        <div className="mt-2 overflow-x-hidden overflow-y-auto">
          <h1 className="text-center font-bold text-2xl text-blueColor py-8">
            Usage
          </h1>
          <ul className="px-8">
            <li className="list-decimal text-gray-600">
              Use the category button to tag your products. eg. If you want to
              add a shirt, shoes or hoodies, you can add it as a category before
              adding the product.
            </li> <br />
            <li className="list-decimal text-gray-600">
              Use the product button to create a product for your store. Fill in 
              the correct details then click create product to proceed.
            </li><br />
            <li className=" text-gray-600">
              NOTE: Make sure to create the product category first before adding products.
            </li>
          </ul>

          
        </div>


      </div>
    </div>
  );
};

export default Main;
