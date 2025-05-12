
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contacts" className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              Game & Set
              <span className="text-[#EECF49]">🎾</span>
            </h3>
            <p className="mb-4">
              Профессиональная школа тенниса для игроков любого уровня подготовки
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#EECF49]">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="hover:text-[#EECF49]">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="hover:text-[#EECF49]">
                <Icon name="Youtube" />
              </a>
            </div>
          </div>
          
          <FooterContactInfo />
          <FooterWorkingHours />
          <FooterQuickLinks />
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p>&copy; {currentYear} Game & Set. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterContactInfo = () => {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Контакты</h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <Icon name="MapPin" className="mr-2 h-5 w-5 shrink-0" />
          <span>ул. Спортивная, 15, Москва</span>
        </li>
        <li className="flex items-start">
          <Icon name="Phone" className="mr-2 h-5 w-5 shrink-0" />
          <span>+7 (999) 123-45-67</span>
        </li>
        <li className="flex items-start">
          <Icon name="Mail" className="mr-2 h-5 w-5 shrink-0" />
          <span>info@gameandset.ru</span>
        </li>
      </ul>
    </div>
  );
};

const FooterWorkingHours = () => {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Часы работы</h4>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>Понедельник - Пятница:</span>
          <span>8:00 - 22:00</span>
        </li>
        <li className="flex justify-between">
          <span>Суббота:</span>
          <span>9:00 - 21:00</span>
        </li>
        <li className="flex justify-between">
          <span>Воскресенье:</span>
          <span>9:00 - 20:00</span>
        </li>
      </ul>
    </div>
  );
};

const FooterQuickLinks = () => {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Быстрые ссылки</h4>
      <ul className="space-y-2">
        <li>
          <a href="#about" className="hover:text-[#EECF49] transition-colors">О школе</a>
        </li>
        <li>
          <a href="#coaches" className="hover:text-[#EECF49] transition-colors">Тренеры</a>
        </li>
        <li>
          <a href="#services" className="hover:text-[#EECF49] transition-colors">Услуги</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-[#EECF49] transition-colors">Отзывы</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#EECF49] transition-colors">Цены</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
