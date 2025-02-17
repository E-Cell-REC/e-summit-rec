import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// const sponsors = [
//   { name: "Sponsor 1", type: "TITLE SPONSOR", logo: "westbridge_logo.png", link: "#" },
//   { name: "Sponsor 2", type: "TITLE SPONSOR", logo: "egf_logo.png", link: "#" },
//   { name: "Sponsor 3", type: "CO-TITLE SPONSOR", logo: "unionbank_logo.png", link: "#" },
//   { name: "Sponsor 4", type: "ASSOCIATE TITLE SPONSOR", logo: "campa_logo.png", link: "#" },
//   { name: "Sponsor 5", type: "DEBT FINANCING PARTNER", logo: "canarabank_logo.png", link: "#" },
//   { name: "Sponsor 6", type: "POWERED BY PARTNER", logo: "sbi_logo.png", link: "#" },
//   { name: "Sponsor 7", type: "SPONSOR", logo: "sponsor7_logo.png", link: "#" },
//   { name: "Sponsor 8", type: "SPONSOR", logo: "sponsor8_logo.png", link: "#" },
//   { name: "Sponsor 9", type: "SPONSOR", logo: "sponsor9_logo.png", link: "#" },
//   { name: "Sponsor 10", type: "SPONSOR", logo: "sponsor10_logo.png", link: "#" },
// ];

const Sponsors: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="h-screen flex items-center justify-center text-white text-4xl">
        <p>Announcing Soon....</p>
      </div>
    {/* <section className="bg-black text-white py-12 text-center px-4 md:px-10">
      <h2 className="text-3xl font-bold text-white mb-1">E-SUMMIT '25</h2>
      <h3 className="text-5xl font-extrabold text-purple-400 mb-4">SPONSORS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
        {sponsors.slice(0, 2).map((sponsor, index) => (
          <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full md:w-3/4 mx-auto">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg w-full h-36 md:h-48 flex justify-center transition-all hover:ring-4 hover:ring-purple-400">
              <img src={sponsor.logo} alt={sponsor.name} className="h-20 md:h-28" />
            </div>
            <p className="text-white text-sm font-semibold uppercase mt-2 text-center">{sponsor.name}</p>
            <p className="text-gray-400 text-xs uppercase text-center">{sponsor.type}</p>
          </a>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
        {sponsors.slice(2, 6).map((sponsor, index) => (
          <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full sm:w-3/4 md:w-auto mx-auto">
            <div className="bg-white p-4 md:p-6 rounded-lg flex flex-col items-center shadow-lg w-full h-28 md:h-36 flex justify-center transition-all hover:ring-4 hover:ring-purple-400">
              <img src={sponsor.logo} alt={sponsor.name} className="h-14 md:h-20" />
            </div>
            <p className="text-white text-sm font-semibold uppercase mt-2 text-center">{sponsor.name}</p>
            <p className="text-gray-400 text-xs uppercase text-center">{sponsor.type}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
        {sponsors.slice(6).map((sponsor, index) => (
          <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full sm:w-3/4 md:w-auto mx-auto">
            <div className="bg-white p-4 md:p-6 rounded-lg flex flex-col items-center shadow-lg w-full h-28 md:h-36 flex justify-center transition-all hover:ring-4 hover:ring-purple-400">
              <img src={sponsor.logo} alt={sponsor.name} className="h-14 md:h-20" />
            </div>
            <p className="text-white text-sm font-semibold uppercase mt-2 text-center">{sponsor.name}</p>
            <p className="text-gray-400 text-xs uppercase text-center">{sponsor.type}</p>
          </a>
        ))}
      </div>
    </section>
     <Footer /> */}
    </div>
  );
};

export default Sponsors;
