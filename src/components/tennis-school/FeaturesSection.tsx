
import React from 'react';
import FeatureCard from './FeatureCard';
import SectionTitle from './SectionTitle';

const FeaturesSection = () => {
  const features = [
    {
      icon: "Trophy",
      title: "Опытные тренеры",
      description: "В нашей команде работают сертифицированные специалисты с многолетним опытом"
    },
    {
      icon: "Users",
      title: "Группы по уровню",
      description: "Формируем группы с учетом возраста и уровня подготовки каждого ученика"
    },
    {
      icon: "MapPin",
      title: "Удобное расположение",
      description: "Занятия проходят на современных кортах в разных районах города"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Почему выбирают нас"
          subtitle="В школе тенниса Game & Set мы создаем идеальные условия для развития игроков любого уровня"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
