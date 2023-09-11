import React from "react";
import { MdMenu } from "react-icons/md";

const CategoryBody = ({ onclick } ) => {
  return <div className="">
    <div className="bg-grayColor rounded-2xl h-[95vh]">
        <div className="mx-4 pt-4">
            <MdMenu
                className="text-4xl text-blueColor cursor-pointer"
                onClick={onclick}
            />
        </div>
        <form className="px-4">
            <div className="inputGroup w-full mt-20">
                <input type="text" required/>
                <label htmlFor="name">Enter Category</label>
            </div>
            <button className="rounded-lg text-lg bg-pinkColor py-3 w-full text-whiteColor mt-6">Create Category</button>
        </form>
    </div>
  </div>;
};

export default CategoryBody;
