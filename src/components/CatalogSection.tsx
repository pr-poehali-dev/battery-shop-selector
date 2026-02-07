import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Battery {
  id: number;
  brand: string;
  model: string;
  capacity: number;
  cranking: number;
  voltage: number;
  length: number;
  width: number;
  height: number;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  warranty: number;
  inStock: boolean;
}

interface CatalogSectionProps {
  filteredBatteries: Battery[];
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  capacityRange: number[];
  setCapacityRange: (value: number[]) => void;
  crankingRange: number[];
  setCrankingRange: (value: number[]) => void;
}

export default function CatalogSection({
  filteredBatteries,
  searchQuery,
  setSearchQuery,
  capacityRange,
  setCapacityRange,
  crankingRange,
  setCrankingRange,
}: CatalogSectionProps) {
  return (
    <section className="py-16 bg-white" id="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Каталог аккумуляторов</h2>
          <p className="text-xl text-muted-foreground">Расширенная фильтрация по характеристикам</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-1 h-fit sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={20} />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Поиск по бренду/модели</label>
                <Input 
                  placeholder="Введите название..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Ёмкость (Ач)</label>
                  <span className="text-sm text-muted-foreground">
                    {capacityRange[0]} - {capacityRange[1]} Ач
                  </span>
                </div>
                <Slider
                  min={40}
                  max={100}
                  step={5}
                  value={capacityRange}
                  onValueChange={setCapacityRange}
                  className="my-4"
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Пусковой ток (А)</label>
                  <span className="text-sm text-muted-foreground">
                    {crankingRange[0]} - {crankingRange[1]} А
                  </span>
                </div>
                <Slider
                  min={400}
                  max={800}
                  step={20}
                  value={crankingRange}
                  onValueChange={setCrankingRange}
                  className="my-4"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <label className="text-sm font-medium">Напряжение</label>
                <Select defaultValue="12">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12V</SelectItem>
                    <SelectItem value="24">24V</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Сбросить фильтры
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено <span className="font-semibold text-foreground">{filteredBatteries.length}</span> аккумуляторов
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBatteries.map(battery => (
                <Card key={battery.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden bg-muted/30">
                    <img 
                      src={battery.image} 
                      alt={`${battery.brand} ${battery.model}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {!battery.inStock && (
                      <Badge className="absolute top-4 right-4 bg-destructive text-white">
                        Нет в наличии
                      </Badge>
                    )}
                    {battery.inStock && battery.rating > 4.7 && (
                      <Badge className="absolute top-4 right-4 gradient-primary text-white border-0">
                        Хит продаж
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{battery.brand}</p>
                      <h3 className="text-lg font-semibold">{battery.model}</h3>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon 
                          key={i}
                          name={i < Math.floor(battery.rating) ? "Star" : "Star"} 
                          size={16}
                          className={i < Math.floor(battery.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({battery.reviews})
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Battery" size={16} className="text-primary" />
                        <span>{battery.capacity} Ач</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" size={16} className="text-accent" />
                        <span>{battery.cranking} А</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Ruler" size={16} className="text-secondary" />
                        <span>{battery.length}×{battery.width}×{battery.height}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Shield" size={16} className="text-green-600" />
                        <span>{battery.warranty} мес</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{battery.price.toLocaleString()} ₽</p>
                      </div>
                      <Button 
                        className="gradient-primary text-white"
                        disabled={!battery.inStock}
                      >
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
