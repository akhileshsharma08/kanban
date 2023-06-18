import React from "react";
import SideNav from "./SideNav";
import Hero from "./Hero";
import Navbar from "./Navbar";
import AllPhases from "./AllPhases";

const Home = () => {
  return (
    <>
      <div className="homepage flex">
        <div className="sidenave">
          <SideNav />
        </div>
        <div className="mainnav w-full">
          <Navbar />
          <Hero/>
          <AllPhases/>
        </div>
      </div>
    </>
  );
};

export default Home;
