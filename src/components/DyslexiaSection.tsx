import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface DyslexiaSectionProps {
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function DyslexiaSection({ handleBooking }: DyslexiaSectionProps) {
  return (
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
              <CardDescription className="text-base leading-relaxed">
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Трудности с чтением? Мы поможем!</div>
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
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-primary/30 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">✍️</div>
                <CardTitle className="text-2xl">Дисграфия</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                <div className="space-y-3">
                  <div className="font-semibold text-foreground">Сложности с письмом? Поможем справиться!</div>
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
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-2 border-secondary/30 bg-white/90 backdrop-blur max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-2">Бесплатная диагностика</CardTitle>
            <CardDescription className="text-center text-base">
              Запишитесь на первую консультацию, чтобы оценить уровень развития навыков чтения и письма у вашего ребенка
            </CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <Label htmlFor="parent-name">Ваше имя</Label>
                <Input id="parent-name" placeholder="Иван Иванов" required />
              </div>
              <div>
                <Label htmlFor="child-age">Возраст ребенка</Label>
                <Input id="child-age" type="number" placeholder="7" min="3" max="18" required />
              </div>
              <div>
                <Label htmlFor="parent-phone">Телефон</Label>
                <Input id="parent-phone" type="tel" placeholder="+7 (999) 123-45-67" required />
              </div>
              <div>
                <Label htmlFor="concerns">Что вас беспокоит?</Label>
                <Textarea 
                  id="concerns" 
                  placeholder="Опишите трудности, которые испытывает ребенок..." 
                  rows={3}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-secondary to-primary text-lg py-6">
                Записаться на диагностику
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
