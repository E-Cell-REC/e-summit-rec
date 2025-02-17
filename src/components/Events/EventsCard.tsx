import React from "react";

interface EventsCardProps {
    name: string;
    date: string;
    location: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ name, date, location }) => {
  return (
    <div className="bg-[#ffffff] p-6 rounded-lg shadow-md hover:scale-105 transition-transform text-white">
      <h3 className="text-lg text-purple-600 font-semibold">{name}</h3>
      <p className="text-gray-400">Date: {date}</p>
      <p className="text-gray-400">Location: {location}</p>
    </div>
  );
};

export default EventsCard;