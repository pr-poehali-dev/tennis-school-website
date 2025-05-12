
import React from 'react';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './SectionTitle';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Замечательная школа с отличными тренерами! Занимаюсь уже полгода, и результаты превзошли все ожидания. Тренеры находят подход к каждому ученику и делают тренировки эффективными и интересными.",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      authorName: "Анна К.",
      authorTitle: "Ученица, 35 лет"
    },
    {
      text: "Отдали ребенка в школу Game & Set в 7 лет, сейчас ему 10 и он уже участвует в соревнованиях. Прогресс колоссальный! Особая благодарность Марии — она нашла подход и влюбила сына в теннис.",
      authorImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      authorName: "Сергей М.",
      authorTitle: "Родитель ученика"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Отзывы наших учеников"
          subtitle="Что говорят о нас те, кто уже занимается в школе Game & Set"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              authorImage={testimonial.authorImage}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
