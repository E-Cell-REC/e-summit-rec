import React from "react";
import NavBar from "../components/NavBar";
import Team from "../components/About/Team";
import Footer from "../components/Footer";
import AboutSec from "../components/About/AboutSec";

const About = () => {
  return (
    <div className="bg-gray-900 h-auto">
        <NavBar />

      {/* team section goes here */}
      <div className="mt-20">
      <AboutSec/>
      </div>
        

      {/* team section goes here */}
        <div className="mx-11">
        <Team/>
        </div>

      {/* footer goes here */}
        <Footer/>
    </div>
  );
};

export default About;
