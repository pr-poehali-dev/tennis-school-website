
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-[#0A2647] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">Game & Set</span>
          <span className="text-[#EECF49]">🎾</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-[#EECF49] transition-colors">О школе</a>
          <a href="#coaches" className="hover:text-[#EECF49] transition-colors">Тренеры</a>
          <a href="#services" className="hover:text-[#EECF49] transition-colors">Услуги</a>
          <a href="#testimonials" className="hover:text-[#EECF49] transition-colors">Отзывы</a>
          <a href="#contacts" className="hover:text-[#EECF49] transition-colors">Контакты</a>
        </nav>
        <Button className="bg-[#1C7F33] hover:bg-[#166329] text-white">
          Записаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
