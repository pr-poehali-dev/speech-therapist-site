import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">📞</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
            Готовы ответить на все ваши вопросы!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Phone" className="text-primary" size={32} />
                <CardTitle>Телефон</CardTitle>
              </div>
              <CardDescription className="text-base">
                <a href="tel:+79991234567" className="text-xl font-semibold text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MapPin" className="text-accent" size={32} />
                <CardTitle>Адрес</CardTitle>
              </div>
              <CardDescription className="text-base">
                г. Москва, ул. Примерная, д. 123
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Mail" className="text-secondary" size={32} />
                <CardTitle>Email</CardTitle>
              </div>
              <CardDescription className="text-base">
                <a href="mailto:info@logoped.ru" className="text-lg font-semibold text-secondary hover:underline">
                  info@logoped.ru
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Clock" className="text-primary" size={32} />
                <CardTitle>График работы</CardTitle>
              </div>
              <CardDescription className="text-base">
                Пн-Пт: 9:00 - 19:00<br />
                Сб: 10:00 - 16:00<br />
                Вс: выходной
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
