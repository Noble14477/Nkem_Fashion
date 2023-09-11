import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ProductBody from "./component/ProductBody";

const Product = () => {
    const [showIcons, setShowIcons] = useState(true);

    const handleSidebar = ()=>{
        setShowIcons(!showIcons)
    }

  return <div className="h-[100vh] overflow-x-hidden">
    <div className={showIcons ? "bg-whiteColor w-full h-[100vh] grid md:grid-cols-1 duration-300 ease-in-out" : "bg-whiteColor w-full h-[100vh] grid grid-cols-5 md:grid-cols-6"}>
        <div className={showIcons ? "hidden" : "col-span-2 md:col-span-1"}>
            <Sidebar/>
        </div>
        <div className={showIcons ? "col-span-4 lg:col-span-1 p-6 w-full" : "col-span-3 md:col-span-5 p-3 md:p-6"}>
            <ProductBody onclick={handleSidebar}/>
        </div>

    </div>
  </div>;
};

export default Product;
