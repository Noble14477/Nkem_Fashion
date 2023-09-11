import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { avata, cart, close, menu } from "../assets/index";
// import { slideOut } from "../constant";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showButtons, setShowButtons] = useState(false)

    const handleMenu = () =>{
        setShowMenu(!showMenu)
    }

    const handleAvatar = () =>{
      setShowButtons(!showButtons)
    }

  return (
    <div className="bg-whiteColor w-full md:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3 lg:px-0">
        <Link to="/">
          <h1 className="font-bold text-3xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-pinkColor">
            NFE.
          </h1>
        </Link>

        <nav className="flex items-center gap-5">
        <div className="hidden lg:block mr-6">
        <Link to="/" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-4 duration-100 ease-in-out">Home</Link>
            <Link to="/shop" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-4 duration-100 ease-in-out">Shop</Link>
            <Link to="/about" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-4 duration-100 ease-in-out">About</Link>
            <Link to="/contact" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-4 duration-100 ease-in-out">Contact</Link>
        </div>

          <div className={showMenu ? "absolute bg-blueColor w-full h-[100vh] top-0 left-0 flex flex-col items-center justify-center gap-10 text-lg text-whiteColor z-50" : "hidden" }>
            <img src={close} alt="avata" className="w-[35px] absolute top-10 right-10 cursor-pointer" onClick={handleMenu}/>
            <Link to="/" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-10 duration-100 ease-in-out">Home</Link>
            <Link to="/shop" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-10 duration-100 ease-in-out">Shop</Link>
            <Link to="/about" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-10 duration-100 ease-in-out">About</Link>
            <Link to="/contact" className="hover:scale-125 hover:border-l-2 hover:border-r-2 px-10 duration-100 ease-in-out">Contact</Link>
          </div>
          <div className="flex gap-3 relative">
            <img src={avata} alt="avata" className="w-[30px] cursor-pointer hover:scale-110 duration-150" onClick={handleAvatar}/>
            <img src={cart} alt="cart" className="w-[30px] cursor-pointer hover:scale-110 duration-150" />
            <div className={showButtons ? "bg-whiteColor absolute flex flex-col -left-6 -bottom-28 w-[120px] p-2 shadow-xl text-center gap-2 rounded-md z-50" : "hidden"}>
              <Link to="/login" className="text-md bg-blueColor text-whiteColor py-2 w-full rounded-md">LogIn</Link>
              <Link to="/register" className="text-md py-2 w-full bg-pinkColor text-whiteColor rounded-md">Register</Link>
            </div>
          </div>
          <img src={menu} alt="avata" className="w-[40px] cursor-pointer lg:hidden" onClick={handleMenu}/>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
