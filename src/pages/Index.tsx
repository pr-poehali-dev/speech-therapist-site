import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MethodsSection from '@/components/MethodsSection';
import DyslexiaSection from '@/components/DyslexiaSection';
import PricesSection from '@/components/PricesSection';
import ContactsSection from '@/components/ContactsSection';

const services = [
  {
    icon: 'Smile',
    emoji: '🎈',
    title: 'Учимся говорить правильно',
    description: 'Ставим звуки через весёлые игры и упражнения. Каждое занятие — маленькое приключение!'
  },
  {
    icon: 'BookHeart',
    emoji: '📚',
    title: 'Развиваем речь играя',
    description: 'Расширяем словарный запас, учимся строить предложения. Всё в игровой форме!'
  },
  {
    icon: 'Star',
    emoji: '⭐',
    title: 'Учимся читать',
    description: 'От букв к словам — интересно и легко. Читаем первые книжки вместе!'
  },
  {
    icon: 'Users',
    emoji: '👨‍👩‍👧',
    title: 'Консультации для родителей',
    description: 'Помогаем мамам и папам заниматься с ребёнком дома. Даём домашние задания.'
  }
];

const methods = [
  {
    emoji: '😛',
    title: 'Весёлая гимнастика для язычка',
    description: 'Делаем упражнения в игровой форме! Язычок-путешественник отправляется в приключения.'
  },
  {
    emoji: '🎮',
    title: 'Игры и сказки',
    description: 'Учимся через игру! Каждое занятие — это новая история с интересными персонажами.'
  },
  {
    emoji: '🎨',
    title: 'Творческие задания',
    description: 'Рисуем, лепим, конструируем — развиваем мелкую моторику и речь одновременно!'
  },
  {
    emoji: '🎵',
    title: 'Логоритмика',
    description: 'Поём песенки, танцуем, играем с ритмом. Движение помогает речи развиваться!'
  }
];

const prices = [
  {
    emoji: '🌟',
    type: 'Индивидуальное занятие',
    duration: '45 минут',
    price: '2 500 ₽',
    popular: true
  },
  {
    emoji: '👨‍👩‍👧',
    type: 'Консультация для родителей',
    duration: '60 минут',
    price: '2 500 ₽',
    popular: false
  }
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        scrollToSection={scrollToSection}
        date={date}
        setDate={setDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
        timeSlots={timeSlots}
      />

      <HeroSection 
        date={date}
        setDate={setDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
        timeSlots={timeSlots}
      />

      <ServicesSection services={services} />

      <MethodsSection methods={methods} />

      <DyslexiaSection handleBooking={handleBooking} />

      <PricesSection 
        prices={prices}
        date={date}
        setDate={setDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
        timeSlots={timeSlots}
      />

      <ContactsSection />

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-5xl mb-4">🌈</div>
          <h3 className="text-2xl font-bold mb-4">Детский Логопед</h3>
          <p className="text-lg mb-6 opacity-90">Помогаем детям говорить красиво и уверенно!</p>
          <div className="flex justify-center gap-6 text-sm opacity-80">
            <a href="tel:+79991234567" className="hover:opacity-100 transition-opacity">📞 +7 (999) 123-45-67</a>
            <span>|</span>
            <a href="mailto:info@logoped.ru" className="hover:opacity-100 transition-opacity">✉️ info@logoped.ru</a>
          </div>
          <div className="mt-8 text-sm opacity-70">
            © 2024 Детский Логопед. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
