
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TestimonialCardProps {
  text: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  text, 
  authorImage, 
  authorName, 
  authorTitle 
}) => {
  return (
    <Card className="border border-gray-100 shadow-md">
      <CardContent className="p-8">
        <div className="flex items-center gap-1 text-[#EECF49] mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="Star" />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{text}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={authorImage} 
              alt={authorName}
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="font-semibold">{authorName}</h4>
            <p className="text-sm text-gray-500">{authorTitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
