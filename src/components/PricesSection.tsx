import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Price {
  emoji: string;
  type: string;
  duration: string;
  price: string;
  popular: boolean;
}

interface PricesSectionProps {
  prices: Price[];
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
  timeSlots: string[];
}

export default function PricesSection({ prices, date, setDate, selectedTime, setSelectedTime, handleBooking, timeSlots }: PricesSectionProps) {
  return (
    <section id="prices" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">💰</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость занятий</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
            Прозрачные цены и гибкий график занятий
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {prices.map((price, index) => (
            <Card key={index} className={`relative overflow-hidden ${price.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur`}>
              {price.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 text-sm font-semibold">
                  Популярное
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <div className="text-6xl mb-4">{price.emoji}</div>
                <CardTitle className="text-2xl mb-2">{price.type}</CardTitle>
                <CardDescription className="text-lg mb-4">{price.duration}</CardDescription>
                <div className="text-4xl font-bold text-primary mb-6">{price.price}</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className={price.popular ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full text-lg py-6" : "w-full text-lg py-6"}>
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
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
