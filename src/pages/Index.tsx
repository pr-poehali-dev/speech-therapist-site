import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'MessageCircle',
    title: 'Постановка звуков',
    description: 'Коррекция звукопроизношения у детей и взрослых. Работа над чистотой речи.'
  },
  {
    icon: 'Brain',
    title: 'Развитие речи',
    description: 'Расширение словарного запаса, формирование грамматического строя речи.'
  },
  {
    icon: 'BookOpen',
    title: 'Обучение чтению',
    description: 'Профилактика и коррекция дислексии. Развитие навыков чтения.'
  },
  {
    icon: 'Users',
    title: 'Групповые занятия',
    description: 'Занятия в малых группах для развития коммуникативных навыков.'
  },
  {
    icon: 'Video',
    title: 'Онлайн консультации',
    description: 'Удобные занятия в zoom с тем же качеством, что и очные встречи.'
  },
  {
    icon: 'UserCheck',
    title: 'Консультации родителей',
    description: 'Рекомендации и домашние задания для эффективной работы.'
  }
];

const methods = [
  {
    title: 'Артикуляционная гимнастика',
    description: 'Специальные упражнения для укрепления мышц речевого аппарата и постановки правильного произношения.'
  },
  {
    title: 'Логопедический массаж',
    description: 'Эффективная техника для коррекции тонуса мышц артикуляционного аппарата.'
  },
  {
    title: 'Игровые методики',
    description: 'Занятия в игровой форме делают процесс обучения увлекательным и результативным.'
  },
  {
    title: 'Нейропсихологический подход',
    description: 'Комплексная работа с учетом особенностей развития высших психических функций.'
  }
];

const prices = [
  {
    type: 'Индивидуальное занятие',
    duration: '45 минут',
    price: '2 500 ₽'
  },
  {
    type: 'Консультация',
    duration: '60 минут',
    price: '3 000 ₽'
  },
  {
    type: 'Групповое занятие',
    duration: '60 минут',
    price: '1 500 ₽'
  },
  {
    type: 'Онлайн занятие',
    duration: '45 минут',
    price: '2 000 ₽'
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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mic" className="text-primary" size={28} />
              <span className="text-xl font-semibold text-foreground">Логопед</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('methods')} className="text-sm font-medium hover:text-primary transition-colors">Методики</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Онлайн-запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Выберите удобную дату и время для занятия
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                    <div>
                      <Label>Выберите дату</Label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                    <div>
                      <Label>Выберите время</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? 'default' : 'outline'}
                            onClick={() => setSelectedTime(time)}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Опишите ваш запрос или особенности..." rows={3} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Чистая речь — уверенность в себе
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная логопедическая помощь детям и взрослым. Современные методики и индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                    Записаться на консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Онлайн-запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Выберите удобную дату и время для занятия
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name2">Ваше имя</Label>
                        <Input id="name2" placeholder="Иван Иванов" required />
                      </div>
                      <div>
                        <Label htmlFor="phone2">Телефон</Label>
                        <Input id="phone2" type="tel" placeholder="+7 (999) 123-45-67" required />
                      </div>
                      <div>
                        <Label htmlFor="email2">Email</Label>
                        <Input id="email2" type="email" placeholder="email@example.com" />
                      </div>
                      <div>
                        <Label>Выберите дату</Label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      <div>
                        <Label>Выберите время</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? 'default' : 'outline'}
                              onClick={() => setSelectedTime(time)}
                              className="w-full"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message2">Комментарий</Label>
                        <Textarea id="message2" placeholder="Опишите ваш запрос или особенности..." rows={3} />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к коррекции речевых нарушений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Методики работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Проверенные техники для достижения результата
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-3">{method.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачные тарифы без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {prices.map((price, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{price.type}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{price.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-4">{price.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Онлайн-запись: {price.type}</DialogTitle>
                        <DialogDescription>
                          Выберите удобную дату и время для занятия
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-6">
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor={`name-${index}`}>Ваше имя</Label>
                            <Input id={`name-${index}`} placeholder="Иван Иванов" required />
                          </div>
                          <div>
                            <Label htmlFor={`phone-${index}`}>Телефон</Label>
                            <Input id={`phone-${index}`} type="tel" placeholder="+7 (999) 123-45-67" required />
                          </div>
                          <div>
                            <Label htmlFor={`email-${index}`}>Email</Label>
                            <Input id={`email-${index}`} type="email" placeholder="email@example.com" />
                          </div>
                          <div>
                            <Label>Выберите дату</Label>
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border"
                              disabled={(date) => date < new Date()}
                            />
                          </div>
                          <div>
                            <Label>Выберите время</Label>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {timeSlots.map((time) => (
                                <Button
                                  key={time}
                                  type="button"
                                  variant={selectedTime === time ? 'default' : 'outline'}
                                  onClick={() => setSelectedTime(time)}
                                  className="w-full"
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor={`message-${index}`}>Комментарий</Label>
                            <Textarea id={`message-${index}`} placeholder="Опишите ваш запрос или особенности..." rows={3} />
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь со мной удобным способом
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@logoped.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Часы работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Быстрая связь</h3>
                  <div className="flex gap-3">
                    <Button size="lg" variant="outline" className="flex-1">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1">
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent">
                        Записаться на консультацию
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Онлайн-запись на консультацию</DialogTitle>
                        <DialogDescription>
                          Выберите удобную дату и время для занятия
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-6">
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor="name-contact">Ваше имя</Label>
                            <Input id="name-contact" placeholder="Иван Иванов" required />
                          </div>
                          <div>
                            <Label htmlFor="phone-contact">Телефон</Label>
                            <Input id="phone-contact" type="tel" placeholder="+7 (999) 123-45-67" required />
                          </div>
                          <div>
                            <Label htmlFor="email-contact">Email</Label>
                            <Input id="email-contact" type="email" placeholder="email@example.com" />
                          </div>
                          <div>
                            <Label>Выберите дату</Label>
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border"
                              disabled={(date) => date < new Date()}
                            />
                          </div>
                          <div>
                            <Label>Выберите время</Label>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {timeSlots.map((time) => (
                                <Button
                                  key={time}
                                  type="button"
                                  variant={selectedTime === time ? 'default' : 'outline'}
                                  onClick={() => setSelectedTime(time)}
                                  className="w-full"
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="message-contact">Комментарий</Label>
                            <Textarea id="message-contact" placeholder="Опишите ваш запрос или особенности..." rows={3} />
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Логопед. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
