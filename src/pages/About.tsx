import NavBar from "../components/NavBar";
// import Team from "../components/About/Team";
import Footer from "../components/Footer";
import EsummitTeam from "../assets/images/esummit25Team.jpg";
import EcellLogo from "../assets/logos/ecellnew.png"
import { Lightbulb, Handshake, Rocket } from "lucide-react";

interface Value {
  title: string;
  desc: string;
  icon: JSX.Element;
}

// Data for company values
const values: Value[] = [
  {
    title: "Innovation & Creativity",
    desc: "We encourage bold ideas and disruptive thinking to drive meaningful change in the entrepreneurial landscape.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Collaboration & Growth",
    desc: "Success is built through teamwork and shared knowledge. We cultivate a supportive network of founders, mentors, and investors.",
    icon: <Handshake size={32} />,
  },
  {
    title: "Impact & Sustainability",
    desc: "We aim to create long-term value by promoting sustainable business solutions that make a real difference.",
    icon: <Rocket size={32} />,
  },
];

const About = () => {
  return (
    <div className="bg-gray-900 h-auto">
      <NavBar />

      {/* about section goes here */}
      <div className="aboutSection mt-10 text-white bg-gray-900 px-6 md:px-20">
        {/* Header Section */}
        <div className="headSec flex flex-col md:flex-row items-center justify-center text-white md:h-[70vh] w-full mb-10 text-center md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-2xl text-purple-600 md:text-3xl font-bold mb-2">
              E-SUMMIT'25 REC organised by <a href="https://ecellrec.vercel.app" className="underline underline-offset-2 text-white hover:text-purple-600">E-Cell REC</a>
            </h1>
            <p className="text-justify text-md md:text-lg">
              <span className="text-purple-400 font-semibold">E-Cell REC</span> proudly presents the first edition of its
              Entrepreneurship Summit, a premier event designed to bridge the gap
              between students, aspiring entrepreneurs, startup founders,
              investors, and industry experts. With a strong focus on
              strengthening Andhra Pradesh's startup ecosystem, <span className="text-purple-400 font-semibold" >E-Summit REC </span>
              serves as a hub for collaborations, networking, and strategic
              connections, particularly uniting the North Andhra startup community
              under one roof. Our mission is to educate, engage, and empower
              attendees through impactful speaker sessions, panel discussions, and
              hands-on experiences. We aim to cultivate an entrepreneurial mindset
              by providing real-world insights, mentorship, and incredible
              opportunities to shape the future of innovation. Join us as we
              embark on this transformative journey, unlocking new possibilities
              and empowering endless horizons! 🚀
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-10 md:w-1/2">
            <img src={EcellLogo} className="w-full h-auto" alt="ecellrec" />
          </div>
        </div>

        {/* Image Section */}
        <div className="imgSec h-auto py-10 text-white md:h-[100vh]">
          <img
            src={EsummitTeam}
            alt="About us section image"
            className="h-50 w-full rounded-lg"
          />
        </div>

        <div className="py-10 h-screen">
          {/* Importance Section */}
          <div className="importanceSec text-white h-[40vh] md:h-[30vh] w-full md:w-[50vw]">
            <p className="mb-2">Our values</p>
            <h2 className="text-xl text-purple-600 font-semibold md:text-2xl mb-2">
              What Drives Us Forward
            </h2>
            <p className="text-justify">
              At E-Cell REC, we believe in fostering innovation, collaboration,
              and entrepreneurial excellence. Our core values shape our vision
              and guide us in creating an ecosystem that empowers aspiring
              entrepreneurs.
            </p>
          </div>

          {/* Points Section */}
          <div className="pointsSec text-white h-auto md:h-[40vh] mt-4 flex flex-wrap gap-10">
            {values.map((value, index) => (
              <div key={index} className="pointBox w-full md:w-[30%]">
                <div className="py-4 text-purple-600">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">
                  {value.title}
                </h3>
                <p className="text-justify">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* team section goes here */}
      {/* <div className="mx-11 mt-96 sm:mt-0">
        <Team />
      </div> */}
      <div className="mb-64 md:hidden"></div>

      {/* footer goes here */}
      <Footer />
    </div>
  );
};

export default About;
