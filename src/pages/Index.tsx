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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌈</span>
              <span className="text-xl font-semibold text-foreground">Детский Логопед</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in text-center lg:text-left">
              <div className="text-6xl mb-6 animate-bounce">🌈 🌟 🎈</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Говорим красиво и правильно!
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
                Занимательные занятия для вашего ребёнка. Учимся через игру, развиваемся с удовольствием!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8 shadow-lg">
                    🎉 Записаться на занятие
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
            <div className="animate-scale-in hidden lg:block">
              <img 
                src="https://cdn.poehali.dev/projects/2917e5cc-76e2-4acb-8d01-583b8d622742/files/d5c0ce8e-d71a-4ca9-a57b-d9dfaa7d828b.jpg" 
                alt="Детский логопед" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Чем мы занимаемся?</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
              Все занятия проходят в игровой форме — весело, интересно и эффективно!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in border-2 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-5xl mb-4">{service.emoji}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем?</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
              Используем проверенные методики, которые нравятся детям
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-secondary/30 bg-gradient-to-br from-white to-secondary/5" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-5xl mb-3">{method.emoji}</div>
                  <CardTitle className="text-2xl mb-3">{method.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dyslexia" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-6xl mb-4">📖✨</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Работаем с дислексией и дисграфией</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto font-medium">
              Помогаем детям преодолеть трудности в чтении и письме через специальные игровые методики
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-accent/30 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">📚</div>
                  <CardTitle className="text-2xl">Дислексия</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Трудности с чтением? Мы поможем!</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Улучшаем узнавание букв и слов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Развиваем фонематический слух</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Учим читать плавно и с пониманием</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Игровые упражнения на каждом занятии</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/30 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">✍️</div>
                  <CardTitle className="text-2xl">Дисграфия</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Сложности с письмом? Поможем справиться!</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">✓</span>
                      <span>Исправляем ошибки на письме</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">✓</span>
                      <span>Развиваем мелкую моторику</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">✓</span>
                      <span>Формируем правильное письмо</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">✓</span>
                      <span>Творческие задания и прописи</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/10 p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Индивидуальный подход к каждому ребёнку</h3>
              <p className="text-base text-muted-foreground mb-6 max-w-2xl">
                Разрабатываем персональную программу занятий с учётом особенностей вашего ребёнка. 
                Работаем мягко, через игру и позитивное подкрепление.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent shadow-lg">
                    🌟 Записаться на диагностику
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Запись на диагностику</DialogTitle>
                    <DialogDescription>
                      Первичная диагностика поможет определить индивидуальную программу занятий
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name-diag">Ваше имя</Label>
                        <Input id="name-diag" placeholder="Иван Иванов" required />
                      </div>
                      <div>
                        <Label htmlFor="phone-diag">Телефон</Label>
                        <Input id="phone-diag" type="tel" placeholder="+7 (999) 123-45-67" required />
                      </div>
                      <div>
                        <Label htmlFor="email-diag">Email</Label>
                        <Input id="email-diag" type="email" placeholder="email@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="child-age">Возраст ребёнка</Label>
                        <Input id="child-age" placeholder="7 лет" required />
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
                        <Label htmlFor="message-diag">Опишите трудности ребёнка</Label>
                        <Textarea id="message-diag" placeholder="Например: путает буквы, пропускает окончания..." rows={3} />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-5xl mb-4">🎁</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость занятий</h2>
            <p className="text-lg text-foreground font-medium">
              Честные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {prices.map((price, index) => (
              <Card key={index} className={`hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 ${price.popular ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5' : 'hover:border-primary/20'}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{price.emoji}</span>
                    {price.popular && <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                  </div>
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