
import React from 'react';
import CoachCard from './CoachCard';
import SectionTitle from './SectionTitle';

const CoachesSection = () => {
  const coaches = [
    {
      image: "https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Александр Петров",
      role: "Главный тренер",
      description: "Мастер спорта по теннису, более 15 лет опыта тренерской работы"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Мария Иванова",
      role: "Тренер детских групп",
      description: "Специалист по работе с юными спортсменами, психолог"
    },
    {
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Дмитрий Соколов",
      role: "Тренер по физподготовке",
      description: "Разрабатывает индивидуальные программы физической подготовки"
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Наши тренеры"
          subtitle="Профессионалы своего дела, которые помогут вам достичь любых целей в теннисе"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              image={coach.image}
              name={coach.name}
              role={coach.role}
              description={coach.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
