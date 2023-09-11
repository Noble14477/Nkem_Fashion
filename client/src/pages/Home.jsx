import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import About from "../components/About";
import NewCollection from "../components/NewCollection";
import Collections from "../components/Collections";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [toTop, setToTop] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

console.log(offset); 
  
  return <div className="overflow-x-hidden">
    <div>
        <Navbar/>
        <Hero/>
        <SubHero/>
    </div>
    <div className="bg-particl bg-cover w-full h-auto bg-repeat">
      <About/>
    </div>
    <NewCollection/>
    <Collections/>
    <Reviews/>
    <Footer/>

{offset >= 300 ? (<a href="#" className="text-xl bg-pinkColor px-4 py-2 fixed bottom-20 right-5 rounded-md text-whiteColor font-bold">^</a>) : ""}
    <div>
      
    </div>
  </div>;
};

export default Home;
