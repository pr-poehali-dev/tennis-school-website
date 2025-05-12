
import React from 'react';

interface CoachCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const CoachCard: React.FC<CoachCardProps> = ({ image, name, role, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`Тренер ${name}`}
          className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[#1C7F33] font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CoachCard;
