import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GuheshSir from "../assets/speakers/guheshsir.jpg";
import VenkataSir from "../assets/speakers/venkatareaddysir.jpg";
import VineelSir from "../assets/speakers/vineelsir.jpg";
import SuryaSir from "../assets/speakers/SuryaPrakashSir.jpg";
import ShashankSir from "../assets/speakers/ShashankSir.jpg";
import imagek from "../assets/speakers/image.png";

const speakers = [
  {
    name: "Guhesh Ramanathan",
    title: "CEO - IIM Visakhapatnam FIELD",
    image: GuheshSir,
  },
  {
    name: "Nallamilli Venkata Reddy",
    title: "Founder - CEO Teckybot",
    image: VenkataSir,
  },
  {
    name: "Vineel Judson",
    title: "Founder & CEO - Taramandal",
    image: VineelSir,
  },
  {
    name: "Surya Prakash Kuchimanchi",
    title: "Co-Founder & CEO at Deeploop",
    image: SuryaSir,
  },
  {
    name: "Shashank R",
    title: "Founder & CEO - ERMIN Automotive",
    image: ShashankSir,
  },
  {
    name: "Mani Teja Pratha",
    title: "Laiout",
    image: imagek,
  }
];

const Speakers = () => {
  return (
    <div className="bg-gray-900">
      <NavBar />
      {/* <div className="h-screen flex items-center justify-center text-white text-4xl">
        <p>Announcing Soon....</p>
      </div> */}
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20 relative">
      <div className="text-center">
        <h2 className="text-white text-4xl font-extrabold tracking-wider">
          E-SUMMIT'25
        </h2>
        <h3 className="text-purple-300 text-6xl font-bold mt-2 mb-10">
          SPEAKERS
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-xl p-5 rounded-2xl text-center border border-gray-500 hover:border-purple-400 transition-all duration-300 w-64"
          >
            <div className="flex justify-center mb-4 relative">
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-purple-500 blur-xl opacity-50"></div>
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 rounded-full border-4 border-purple-400 relative z-10 shadow-md"
              />
            </div>
            <h4 className="text-lg text-gray-200 font-semibold">
              {speaker.name}
            </h4>
            <p className="text-[#b390f9] text-sm font-light">{speaker.title}</p>
          </div>
        ))}
      </div>
    </div>  
    <Footer />
   
   
    </div>
  );
};

export default Speakers;