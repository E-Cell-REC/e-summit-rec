import { useState } from "react";
import EventBox from "../components/Events/EventBox";
import EventOverview from "../components/Events/EventOverview";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

import Mun from "../assets/images/mun.jpg"
import IdeaPitch from "../assets/images/ideapitch.jpg"
import BeTheCEO from "../assets/images/betheceo.jpg"
import TechTalks from "../assets/images/techtalks.jpg"
import StartupExpo from "../assets/images/startupexpo.jpeg"
import IPLAuction from "../assets/images/iplauction.jpeg"
import Internships from "../assets/images/Internships.png"
import Panel from "../assets/images/panel.png"
import SpeakerSession from "../assets/images/speakerSesssion.jpg"
import NetworkingMixer from "../assets/images/networkingmixer.jpeg"
import Cultural from "../assets/images/cultural.jpeg" 


interface Event {
  date: string;
  location: string;
  title: string;
  description: string;
  imageUrl: string;
  speakers: string;
  registerLink: string;
}

export default function ESummitPage() {
  // State to track selected event
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sample event data
  const events = [
    {
      date: "01/03/2025",
      location: "TBA",
      title: "Model United Nations (MUN)",
      description:
        "MUN at E-Summit Dive into the world of economic diplomacy, and entrepreneurship at our MUN during the E-Summit. Simulate global councils, tackle business-centric challenges, and debate innovation-driven agendas. Join us to shape solutions for the world's most pressing economic issues and lead the dialogue for a sustainable, entrepreneurial future!",
      imageUrl: Mun,
      speakers: "Ammuktha , Vishal",
      registerLink: "https://konfhub.com/mun-esummit25rec",
    },
    {
      date: "01/03/2025",
      location: "TBA",
      title: "Elevator Pitch",
      description: "Step into the spotlight at the Elevator Pitch Competition!, This is your chance to present your innovative business ideas to a panel of industry experts. Gain valuable mentorship, receive constructive feedback, and compete for exciting prizes as you bring your entrepreneurial vision to life! ",
      imageUrl: IdeaPitch,
      speakers: "Vyshnavi",
      registerLink: "https://konfhub.com/elevator-pitching-esummit25rec",
    },
    {
      date: "01/03/2025",
      location: "TBA",
      title: "Be the CEO",
      description: "Take charge in the Be the CEO challenge! This strategic business simulation game, puts you in the driver’s seat, making executive decisions to navigate challenges and grow a virtual company. Showcase your leadership, strategy, and innovation to emerge as the ultimate CEO!",
      imageUrl: BeTheCEO,
      speakers: "Chetan Deva P",
      registerLink: "https://konfhub.com/be-the-ceo-esummit25rec",
    },
    {
      date: "01/03/2025",
      location: "TBA",
      title: "Tech Talks",
      description: "Explore the future of technology at Tech Talks. featuring two dynamic streams,: Circuital Technologies and Information Technology. Gain valuable insights from industry experts as they discuss cutting-edge trends, breakthrough innovations, and exciting career opportunities in the tech world! ",
      imageUrl: TechTalks,
      speakers: "Sanjana , Venkata Aditya",
      registerLink: "https://konfhub.com/tech-talks-esummit25rec",
    },
    {
      date: "02/03/2025",
      location: "TBA",
      title: "Speaker Sessions",
      description: "Gain valuable insights from industry experts as they share their knowledge, experiences, and success stories. Speaker Sessions cover a wide range of topics, including entrepreneurship, innovation, technology, and leadership, offering inspiration and guidance to aspiring entrepreneurs and professionals.",
      imageUrl: SpeakerSession,
      speakers: "Sanjana, Venkat Aditya, Chetan Deva P",
      registerLink: "https://konfhub.com/speaker-sessions-esummit25rec",
    },
    {
      date: "02/03/2025",
      location: "TBA",
      title: "Panel Discussion",
      description: "A Panel Discussion is a structured event where experts share insights, exchange ideas, and debate on a specific topic, followed by audience interaction through Q&A. ",
      imageUrl: Panel,
      speakers: "Charan Manikanta N",
      registerLink: "https://konfhub.com/panel-discussion-esummit25rec",
    },
    {
      date: "01/03/2025",
      location: "TBA",
      title: "Project/Startup Exhibition",
      description: "Showcase of innovative technologies and startup products, where participants can display their groundbreaking projects and connect with industry experts. The exhibition offers live demos, networking opportunities, and potential mentorship for budding entrepreneurs and startup founders.",
      imageUrl: StartupExpo,
      speakers: "Vikranth",
      registerLink: "#",
    },
    {
      date: "01/03/2025",
      location: "TBA",
      title: "IPL Auction",
      description: "The IPL Auction is a dynamic event where participants, acting as team owners, bid on players to build their ideal team, simulating real-world business decision-making and negotiation strategies. Watch the bidding war for the best players.",
      imageUrl: IPLAuction,
      speakers: "Pavan Teja, Venkatnadh",
      registerLink: "https://konfhub.com/ipl-auction-esummit25rec",
    },
    {
      date: "02/03/2025",
      location: "TBA",
      title: "Internship Drive",
      description: "Bridge the gap between talent and opportunity with the Internship Drive!, This initiative connects students with startups, providing them with hands-on experience, real-world learning, and a chance to kickstart their careers in a dynamic environment. Get hired by top tech companies.",
      imageUrl: Internships,
      speakers: "Pavan Teja, Pujitha Marisa",
      registerLink: "https://forms.gle/h9kdMxanbJRtd1gu6",
    },
    {
      date: "02/03/2025",
      location: "TBA",
      title: "Networking Mixer",
      description: "Expand your horizons at the Networking Mixer! This platform brings together students, industry professionals, and fellow entrepreneurs, fostering meaningful connections, collaborations, and opportunities to grow your network in the world of innovation and business.",
      imageUrl: NetworkingMixer,
      speakers: "TBA",
      registerLink: "https://konfhub.com/networking-mixer-esummit25rec",
    },
    {
      date: "02/03/2025",
      location: "TBA",
      title: "Culturals",
      description: "Unleash your creativity at Culturals! A vibrant celebration of music, dance, drama, and art, this event brings energy and excitement to the summit while showcasing incredible talent and artistic expression.",
      imageUrl: Cultural,
      speakers: "TBA",
      registerLink: "#",
    },
  ];

  return (
    <div className="bg-[#111827]">
      <NavBar />
      <div className="text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-10">
          E-Summit Events
        </h1>
        <p className="text-lg text-center mb-10">
          Note: Only E-SUMMIT'25 REC Ticket Holders are eligible to participate in the events. Register for E-SUMMIT'25 REC{" "}
        </p>
        {/* Event Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-justify">
            {events.map((event, index) => (
            <EventBox
              key={index}
              {...event}
              description={event.description.split(",")[0] + "."}
              onClick={() => setSelectedEvent(event)}
            />
            ))}
        </div>

        {/* Overview Card (Appears when an event is selected) */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <EventOverview
              date={selectedEvent.date}
              location={selectedEvent.location}
              title={selectedEvent.title}
              description={selectedEvent.description}
              imageUrl={selectedEvent.imageUrl}
              speakers={selectedEvent.speakers}
              registerLink={selectedEvent.registerLink}
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 bg-gray-800 text-white p-2 rounded-full"
            >
              <X />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
