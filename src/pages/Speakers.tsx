import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// const speakers = [
//   {
//     name: "Name1",
//     title: "Role in Company",
//     image: "path/to/name1_image.jpg",
//   },
//   {
//     name: "Name2",
//     title: "Role in Company",
//     image: "path/to/name2_image.jpg",
//   },
//   {
//     name: "Name3",
//     title: "Role in Company",
//     image: "path/to/name3_image.jpg",
//   },
//   {
//     name: "Name4",
//     title: "Role in Company",
//     image: "path/to/name4_image.jpg",
//   },
//   {
//     name: "Name5",
//     title: "Role in Company",
//     image: "path/to/name5_image.jpg",
//   },
//   {
//     name: "Name6",
//     title: "Role in Company",
//     image: "path/to/name6_image.jpg",
//   },
//   {
//     name: "Name7",
//     title: "Role in Company",
//     image: "path/to/name7_image.jpg",
//   },
//   {
//     name: "Name8",
//     title: "Role in Company",
//     image: "path/to/name8_image.jpg",
//   },
// ];

const Speakers = () => {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="h-screen flex items-center justify-center text-white text-4xl">
        <p>Announcing Soon....</p>
      </div>
    {/* <div className="bg-gray-900 text-white py-10 px-5 md:px-20 relative">
      <div className="text-center">
        <h2 className="text-white text-4xl font-extrabold tracking-wider font-sans">
          E-SUMMIT '25
        </h2>
        <h3 className="text-purple-300 text-6xl font-bold mt-2 mb-10 font-serif">
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
    */}
   
    </div>
  );
};

export default Speakers;