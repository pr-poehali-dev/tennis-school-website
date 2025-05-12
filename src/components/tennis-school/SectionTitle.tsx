
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-[#0A2647]">{title}</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
