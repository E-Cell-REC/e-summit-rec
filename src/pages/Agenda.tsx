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
    time: "8:00 AM - 9:30 AM",
    title: "Registration",
    description: "Registration for the event"
  },
  {
    time: "9:00 AM - 10:00 AM",
    title: "Inaguration",
    description: "Welcome address by the Director"
  },
  {
    time: "10:00 AM - 11:00 AM",
    title: "Speaking Session",
    description: "Speaker Sessions by Speakers"
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "Model United Nations (MUN)",
    description: "Dive into the world of economic diplomacy"
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "IPL Auction",
    description: "A fun and financial management event"
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "Be The CEO",
    description: "Business simulation game"
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "Elevator Pitch",
    description: "Pitch your startup idea"
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "Tech Talks",
    description: "Talks on Emerging trends in technology"
  },
  {
    time: "12:30 PM - 1:20 PM",
    title: "Lunch Break",
    description: "Lunch and networking"
  },
  {
    time: "1:20 PM - 1:40 PM",
    title: "Standup Comedy",
    description: "A fun Comedy show"
  },
  {
    time: "1:40 PM - 3:30 PM",
    title: "Model United Nations (MUN) S2",
    description: "Dive into the world of economic diplomacy"
  },
  {
    time: "1:40 PM - 3:30 PM",
    title: "IPL Auction S2",
    description: "A fun and financial management event"
  },
  {
    time: "1:40 PM - 3:30 PM",
    title: "Be The CEO S2",
    description: "Business simulation game"
  },
  {
    time: "1:40 PM - 3:30 PM",
    title: "Elevator Pitch S2",
    description: "Pitch your startup idea"
  },
  {
    time: "1:40 PM - 3:30 PM",
    title: "Tech Talks S2",
    description: "Emerging trends in technology"
  },
  {
    time: "10:00 AM - 3:30 PM",
    title: "Startup EXPO/ Project EXPO",
    description: "Emerging trends in technology"
  }
];

const day2: AgendaItem[] = [
  {
    time: "8:30 AM - 9:30 AM",
    title: "Kits Collection",
    description: "participants can collect their kits"
  },
  {
    time: "9:30 AM - 11:00 AM",
    title: "Panel Disscussion",
    description: "Panel discussion on Entrepreneurship"
  },
  {
    time: "10:00 AM - 10:30 AM",
    title: "Speaker Sessions",
    description: "Speaker Sessions by Speakers"
  },
  {
    time: "10:30 AM - 1:30 PM",
    title: "Networking Mixer",
    description: "Networking and Lunch"
  }
];

const AgendaDay: React.FC<{ day: number; items: AgendaItem[] }> = ({ day, items }) => (
  <div className="mb-12 relative">
    <div className="sticky top-20 z-10 backdrop-blur-md bg-opacity-20 bg-gradient-to-r from-gray-300 via-purple-500 to-gray-300 rounded-2xl p-4 mb-8 shadow-sm">
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