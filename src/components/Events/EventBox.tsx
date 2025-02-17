import React from "react";

interface EventBoxProps {
  date: string;
  location: string;
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const EventBox: React.FC<EventBoxProps> = ({
  date,
  location,
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className="w-80 bg-gray-800 text-white cursor-pointer rounded-lg"
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-40 bg-gray-300 flex items-center justify-center rounded-t-lg">
        <img src={imageUrl} alt="Event" className="w-full h-full object-cover rounded-t-lg" />
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-400">{date} | {location}</p>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <p className="text-purple-500 mt-2">View event &rarr;</p>
      </div>
    </div>
  );
};

export default EventBox;