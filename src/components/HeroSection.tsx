import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface HeroSectionProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
  timeSlots: string[];
}

export default function HeroSection({ date, setDate, selectedTime, setSelectedTime, handleBooking, timeSlots }: HeroSectionProps) {
  return (
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
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Узнать подробнее
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full animate-pulse delay-75"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://poehali.dev/images/Fzu2VOpfDGW9cWX1Q5Gc4.png" 
                alt="Детский логопед" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
