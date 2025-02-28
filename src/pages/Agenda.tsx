import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

const day1: AgendaItem[] = [
  {
    time: "8:30 AM - 9:30 AM",
    title: "Registration",
    description: "Registration Desk Opens at 8:00 AM at H&S Entrance!"
  },
  {
    time: "9:30 AM - 10:30 AM",
    title: "Inaguration",
    description: "Welcome address by Principal- Ch.Srinvasu, IIC Convener DR.Kiran Kumar,N.Venkata Reddy teckybot founder&CEO,Vineel Judson founder of tara mandal,chairman Raghu Kalidindi , P. Shashank Reddy at Seminar Hall"
  },
  {
    time: "10:00 AM - 10:30 AM",
    title: "Idea To Impact",
    description: "Speaker Sessions by P. Shashank Reddy at Seminar Hall"
  },
  {
    time: "10:30 AM - 10:50 AM",
    title: "back bench to launch pad",
    description: "Speaker Sessions by Mohammed Miskeen at Seminar Hall"
  },
  {
    time: "10:50 AM - 11:30 AM",
    title: "think beyond the earth- opportunities in space",
    description: "Speaker Sessions by Vineel Gudson at Seminar Hall"
  },
  {
    time: "11:00 AM - 1:00 PM",
    title: "Model United Nations (MUN)",
    description: "Venue: Nano Labs"
  },
  {
    time: "11:00 AM - 1:00 PM",
    title: "IPL Auction",
    description: "Venue: Nano Labs"
  },
  {
    time: "11:00 AM - 1:00 PM",
    title: "Be The CEO",
    description: "Venue: Nano Labs"
  },
  {
    time: "11:00 AM - 1:00 PM",
    title: "Elevator Pitch",
    description: "Venue: Electro Lounge"
  },
  {
    time: "1:00 PM - 1:40 PM",
    title: "Lunch Break",
    description: "Lunch and networking"
  },
  {
    time: "1:40 PM - 2:00 PM",
    title: "Standup Comedy",
    description: "Venue: Open Stage"
  },
  {
    time: "2:00 PM - 4:00 PM",
    title: "Model United Nations (MUN) S2",
    description: "Venue: Nano Labs"
  },
  {
    time: "2:00 PM - 4:00 PM",
    title: "IPL Auction S2",
    description: "Venue: Nano Labs"
  },
  {
    time: "2:00 PM - 4:00 PM",
    title: "Be The CEO S2",
    description: "Venue: Nano Labs"
  },
  {
    time: "2:00 PM - 4:00 PM",
    title: "Elevator Pitch S2",
    description: "Venue: Electro Lounge"
  },
  {
    time: "10:00 AM - 3:30 PM",
    title: "Startup EXPO/ Project EXPO",
    description: "Venue: Walkway"
  }
];

const day2: AgendaItem[] = [
  {
    time: "9:00 AM - 9:30 AM",
    title: "Kits Collection",
    description: "participants can collect their kits at H&S Entrance"
  },
  {
    time: "9:30 AM - 9:50 AM",
    title: "World of Freelancing",
    description: "Speaker: Mani Teja"
  },
  {
    time: "9:50 AM - 10:20 AM",
    title: "Industry of Illusions: Metaverse",
    description: "Speaker Sessions by Surya Prakash Kuchimanchi"
  },
  {
    time: "10:20 AM - 11:00 AM",
    title: "Opportunities In Future Tech",
    description: "Speaker: Venkata Reddy"
  },
  {
    time: "11:00 AM - 11:40 AM",
    title: "From Student to Startup: A Campus Stroy ",
    description: "Speaker: Guhesh Ramanathan"
  },
  {
    time: "11:40 AM - 12:30 PM",
    title: "E-CONNECT",
    description: "E-CELL's at Nano Labs"
  },
  {
    time: "12:30 AM - 1:30 PM",
    title: "Networking Arena & Lunch",
    description: "Guest Speakers"
  },
  {
    time: "1:30 PM - 4:00 PM",
    title: "Culturals",
    description: "Open Stage"
  },
];

const AgendaDay: React.FC<{ day: number; items: AgendaItem[] }> = ({ day, items }) => (
  <div className="mb-12 relative">
    <div className="sticky top-20 z-10 bg-gradient-to-r from-gray-300 via-purple-500 to-gray-300 rounded-2xl p-4 mb-8 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-purple-600 p-3 rounded-xl">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-white text-transparent bg-clip-text">
          Day {day}
        </h2>
      </div>
    </div>
    <div className="space-y-6 relative">
      <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600/20 to-purple-600/0" />
      {items.map((item, index) => (
        <div 
          key={index} 
          className="relative flex group"
        >
          <div className="absolute left-[24px] top-[24px] w-2 h-2 rounded-full bg-purple-600 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all" />
          <div className="flex-1 ml-16 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex items-center gap-2 sm:min-w-[160px] text-purple-600">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{item.time}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Agenda: React.FC = () => {
  return (
    <div className='bg-gray-900'>
    <NavBar />
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          E-Summit Agenda
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Join us for two days of insightful sessions, engaging discussions, and networking opportunities.
        </p>
      </div>
      <div className="space-y-16">
        <AgendaDay day={1} items={day1} />
        <AgendaDay day={2} items={day2} />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Agenda;