import React from "react";
import { joggersComplete } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return <div className="py-20 max-w-7xl mx-auto">
    <div>
      <div className="px-6 md:flex justify-center items-center gap-12 lg:px-16 xl:px-0">

        <div>
          <h5 className="text-sm lg:text-xl text-gray-600 tracking-wider">What we do</h5>
          <h1 className="font-bold text-blueColor text-3xl lg:text-5xl py-2">About Us.</h1>
            <div>
              <p className="text-sm text-gray-600 leading-7 tracking-wider lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Error ut nihil molestias reprehenderit ratione rerum deserunt 
                voluptate, aliquid a sapiente delectus? Repudiandae, aperiam 
                distinctio laboriosam deleniti id molestiae harum dolores.
              </p>
              <div className="mt-4">
                <Link to="/" className="bg-blueColor text-whiteColor text-sm py-2 px-4 rounded-md lg:text-lg">Read More...</Link>

              </div>
            </div>
          </div>

          <div className="card lg:w-full lg:h-full ">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner lg:w-[400px] lg:h-[450px]">
              <img src={joggersComplete} alt="joggersComplete" className=""/>
            </div>
        </div>

      </div>
    </div>
  </div>;
};

export default About;
