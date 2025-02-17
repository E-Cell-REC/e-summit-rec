import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Home/HeroSection";
import Footer from "../components/Footer";
import EventsCard from "../components/Events/EventsCard";
import Stats from "../components/Home/Stats";
import FeatureVideo from "../components/Home/FeatureVideo";
import EsummitLoads from "../assets/esummitlogogif.gif"

function Home() {
  const [loading, setLoading] = useState(true);

  const handleRegister = () => {
    window.location.href = "https://konfhub.com/e-summit25rec"
  };

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#030712]">
        <img src={EsummitLoads} alt="Loading" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900">
        {/* Navbar */}
        <NavBar />

        {/* HeroSection */}
        <HeroSection />
        <div className="mb-10"></div>

        {/* Video Section */}
        <FeatureVideo />

        {/* Stats Section  */}
        <div className="h-screen mt-20">
          <h1 className="text-4xl text-white font-semibold ml-20">Past Events Statistics</h1>
          <Stats />
        </div>

        {/* Events Section */}
        <section className="container mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-white">Events Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventsCard name={"MUN"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"Elevator Pitch"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"Be The CEO"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"Tech Talks"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"Project/Startup Exhibition"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"IPL AUCTION"} date={"1st march"} location={"TBA"} />
            <EventsCard name={"Internship Drive"} date={"2nd march"} location={"TBA"} />
            <EventsCard name={"Panel Discussion"} date={"2nd march"} location={"TBA"} />
            <EventsCard name={"Networking Mixer"} date={"2nd march"} location={"TBA"} />
            <EventsCard name={"Culturals"} date={"2nd march"} location={"TBA"} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8 mt-12 bg-gradient-to-r from-gray-400 via-purple-500 to-gray-400">
          <h2 className="text-xl font-semibold text-white">Don't Miss Out</h2>
          <p className="text-gray-200 mt-2">Join us in making this event successful. Register now and be part of the excitement.</p>
          <button onClick={handleRegister} className="mt-4 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300">
            Register Now
          </button>
        </section>

        {/* Footer */}
        <div className="mt-20"></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
