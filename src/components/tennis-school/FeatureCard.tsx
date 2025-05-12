
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="pt-6">
        <div className="bg-[#1C7F33]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Icon name={icon} className="w-8 h-8 text-[#1C7F33]" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
