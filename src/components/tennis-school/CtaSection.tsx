
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
