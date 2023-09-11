import React from "react";
import { MdMenu } from "react-icons/md";

const ProductBody = ({ onclick }) => {
  return (
    <div className="">
      <div className="bg-grayColor rounded-2xl h-[95vh]">
        <div className="mx-4 pt-4">
          <MdMenu
            className="text-4xl text-blueColor cursor-pointer"
            onClick={onclick}
          />
        </div>
        <form className="px-4">
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            <div className=" w-full">
              <input type="file" className="text-gray-600" />
            </div>
            <div className="inputGroup w-full">
              <input type="text" required />
              <label htmlFor="name">Enter Name</label>
            </div>
            <div className="inputGroup w-full">
              <input type="text" required />
              <label htmlFor="name">Enter Description</label>
            </div>
            <div className="inputGroup w-full">
              <input type="number" required />
              <label htmlFor="name">Enter Price</label>
            </div>
            <div className="inputGroup w-full">
              <input type="number" required />
              <label htmlFor="name">Enter Quantity</label>
            </div>
          </div>
          <button className="rounded-lg text-lg bg-pinkColor py-3 w-full text-whiteColor mt-6">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductBody;
