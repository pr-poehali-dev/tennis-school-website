
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0A2647] to-[#1C7F33] text-white py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Профессиональная школа тенниса в вашем городе
          </h1>
          <p className="text-lg opacity-90">
            Тренировки для детей и взрослых любого уровня подготовки под руководством опытных тренеров
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-[#EECF49] hover:bg-[#D9BC3A] text-[#0A2647] font-medium text-base px-6">
              Пробное занятие
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Расписание
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
            alt="Теннисист на корте"
            className="rounded-lg shadow-xl w-full object-cover" 
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
