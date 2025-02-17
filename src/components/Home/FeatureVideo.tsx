"use client";  
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import EsummitBgVideo from "../../assets/esummit-bgvideo.mp4"

const FeatureVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={EsummitBgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-purple-400 text-5xl md:text-7xl font-bold"
        >
          1ST YEAR OF E-SUMMIT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-lg md:text-xl mt-4 max-w-3xl"
        >
          The 1st edition of Vizag&apos;s largest business conclave is poised to make history, 
          igniting groundbreaking ideas and visionary solutions that transform challenges into new opportunities.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl mt-4 font-semibold"
        >
          Join us on <span className="font-bold">March 1st & 2nd, 2025</span> as we set bold new standards for the 
          future of business and redefine purposeful leadership.
        </motion.p>
      </div>
    </section>
  );
};

export default FeatureVideo;