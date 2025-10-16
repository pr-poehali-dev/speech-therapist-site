import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Method {
  emoji: string;
  title: string;
  description: string;
}

interface MethodsSectionProps {
  methods: Method[];
}

export default function MethodsSection({ methods }: MethodsSectionProps) {
  return (
    <section id="methods" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши методики</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
            Используем проверенные и эффективные методики работы с детьми
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10">
              <CardHeader>
                <div className="text-6xl mb-4">{method.emoji}</div>
                <CardTitle className="text-xl mb-3">{method.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {method.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
