import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  carBrands: string[];
  carModels: Record<string, string[]>;
}

export default function HeroSection({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  carBrands,
  carModels,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="gradient-primary text-white border-0 px-4 py-1.5">
            🚗 Гарантия качества
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Аккумуляторы для <span className="gradient-text">вашего авто</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Подберите идеальный аккумулятор по марке и модели автомобиля за 2 минуты. Доставка в день заказа!
          </p>
          
          <Card className="mt-12 shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Быстрый подбор аккумулятора</CardTitle>
              <CardDescription>Укажите марку и модель вашего автомобиля</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Марка автомобиля</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      {carBrands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Модель автомобиля</label>
                  <Select 
                    value={selectedModel} 
                    onValueChange={setSelectedModel}
                    disabled={!selectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите модель" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedBrand && carModels[selectedBrand]?.map(model => (
                        <SelectItem key={model} value={model}>{model}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full gradient-primary text-white h-12 text-lg font-semibold"
                disabled={!selectedBrand || !selectedModel}
              >
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать аккумулятор
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
