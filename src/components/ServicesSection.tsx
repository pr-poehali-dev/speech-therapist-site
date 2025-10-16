import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  icon: string;
  emoji: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">🎯</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Чем мы занимаемся</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
            Индивидуальный подход к каждому ребёнку. Все занятия проходят в игровой форме!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">{service.emoji}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
