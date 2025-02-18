import React from "react";
import { Calendar, MapPin, User } from "lucide-react";

interface OverviewCardProps {
  date: string;
  location: string;
  title: string;
  description: string;
  imageUrl: string;
  speakers: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  date,
  location,
  title,
  description,
  imageUrl,
  speakers,
}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white bg-opacity-5 backdrop-blur">
      <div className="flex flex-col lg:flex-row w-full h-full p-12 rounded-lg">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <nav className="text-sm text-gray-400 mb-2">
            <span className="mr-2">Events</span> &gt; <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-gray-400 mt-2">{description}</p>

          {/* Event Info */}
          <div className="flex items-center text-gray-400 text-sm mt-6 space-x-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-purple-500 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-purple-500 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 text-purple-500 mr-1" />
              <span>{speakers}</span>
            </div>
          </div>

          {/* Buttons */}
          {/* <div className="mt-8 flex space-x-4">
            <button className="border border-purple-600 px-6 py-3 text-sm font-semibold uppercase rounded">
              View events
            </button>
          </div> */}
        </div>

        {/* Right Section - Event Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-200 w-full h-[80%] flex items-center justify-center rounded-lg">
            <img src={imageUrl} alt="Event" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;