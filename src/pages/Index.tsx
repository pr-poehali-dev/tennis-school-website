
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2647]">Почему выбирают нас</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              В школе тенниса Game & Set мы создаем идеальные условия для развития игроков любого уровня
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#1C7F33]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="w-8 h-8 text-[#1C7F33]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опытные тренеры</h3>
                <p className="text-gray-600">
                  В нашей команде работают сертифицированные специалисты с многолетним опытом
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#1C7F33]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-8 h-8 text-[#1C7F33]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Группы по уровню</h3>
                <p className="text-gray-600">
                  Формируем группы с учетом возраста и уровня подготовки каждого ученика
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#1C7F33]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="w-8 h-8 text-[#1C7F33]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Удобное расположение</h3>
                <p className="text-gray-600">
                  Занятия проходят на современных кортах в разных районах города
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2647]">Наши тренеры</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Профессионалы своего дела, которые помогут вам достичь любых целей в теннисе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Тренер Александр"
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Александр Петров</h3>
                <p className="text-[#1C7F33] font-medium mb-3">Главный тренер</p>
                <p className="text-gray-600">
                  Мастер спорта по теннису, более 15 лет опыта тренерской работы
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Тренер Мария"
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Мария Иванова</h3>
                <p className="text-[#1C7F33] font-medium mb-3">Тренер детских групп</p>
                <p className="text-gray-600">
                  Специалист по работе с юными спортсменами, психолог
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg bg-white group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Тренер Дмитрий"
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Дмитрий Соколов</h3>
                <p className="text-[#1C7F33] font-medium mb-3">Тренер по физподготовке</p>
                <p className="text-gray-600">
                  Разрабатывает индивидуальные программы физической подготовки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2647]">Отзывы наших учеников</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас те, кто уже занимается в школе Game & Set
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-100 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 text-[#EECF49] mb-4">
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Замечательная школа с отличными тренерами! Занимаюсь уже полгода, и результаты превзошли все ожидания. Тренеры находят подход к каждому ученику и делают тренировки эффективными и интересными."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                      alt="Анна К."
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна К.</h4>
                    <p className="text-sm text-gray-500">Ученица, 35 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 text-[#EECF49] mb-4">
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                  <Icon name="Star" />
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Отдали ребенка в школу Game & Set в 7 лет, сейчас ему 10 и он уже участвует в соревнованиях. Прогресс колоссальный! Особая благодарность Марии — она нашла подход и влюбила сына в теннис."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                      alt="Сергей М."
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Сергей М.</h4>
                    <p className="text-sm text-gray-500">Родитель ученика</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2647] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать заниматься теннисом?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Запишитесь на пробное занятие прямо сейчас и сделайте первый шаг к новым спортивным достижениям
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#EECF49] hover:bg-[#D9BC3A] text-[#0A2647] font-semibold text-base px-8 py-6">
              Записаться на пробное занятие
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Game & Set. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
