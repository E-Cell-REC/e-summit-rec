import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function TicketPerks() {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="text-white min-h-screen flex flex-col items-center p-4 sm:p-8">
        <h1 className="flex justify-center text-purple-600 text-2xl sm:text-3xl mt-2">
          Ticket Perks
        </h1>
        <div className="card mt-5 w-full sm:w-[35vw] px-6 sm:px-10 py-4 rounded-lg mx-auto text-base sm:text-lg bg-gradient-to-r from-pink-400 to-purple-600">
          <p className="text-black text-xl sm:text-2xl mb-5 font-semibold flex justify-center">
            E-SUMMIT'25 REC Ticket
          </p>
          <ul className="list-disc text-gray-200 space-y-2">
            <li>
              Opportunity to connect Entrepreneurs, Professionals, and Startup
              Founders e.t.c...
            </li>
            <li>Participation Certification by ECELL REC</li>
            <li>Access to all events and competitions</li>
            <li>Access to all Speaker Sessions and Tech talks</li>
            <li>Access to Panel Discussion and Networking Mixer</li>
            <li>Access to Startup EXPO</li>
            <li>Access to apply in Internship Drive</li>
            <li>Lunch will be provided for these two days in the event</li>
            <li>Access to all Cultural Events</li>
            <li>Access to free Goodies/Swags</li>
          </ul>
        </div>
        <div className="mt-2 text-center">
          <p>
            Want these all perks,{" "}
            <span
              className="text-purple-600 cursor-pointer hover:text-white underline underline-offset-2"
              onClick={() => {
                window.location.href = "https://konfhub.com/e-summit25rec";
              }}
            >
              register now
            </span>{" "}
            for E-SUMMIT'25 REC
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
