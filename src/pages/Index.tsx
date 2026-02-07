import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const batteries: Battery[] = [
  {
    id: 1,
    brand: 'VARTA',
    model: 'Blue Dynamic E11',
    capacity: 74,
    cranking: 680,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 8990,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/16391dd5-0a8d-44bc-9b1b-5f25c0c406f6.jpg',
    rating: 4.8,
    reviews: 234,
    warranty: 24,
    inStock: true,
  },
  {
    id: 2,
    brand: 'BOSCH',
    model: 'S4 Silver',
    capacity: 60,
    cranking: 540,
    voltage: 12,
    length: 242,
    width: 175,
    height: 190,
    price: 7490,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/cbf2ce2b-862f-4880-83cd-491c799491d4.jpg',
    rating: 4.9,
    reviews: 567,
    warranty: 36,
    inStock: true,
  },
  {
    id: 3,
    brand: 'Exide',
    model: 'Premium EA722',
    capacity: 72,
    cranking: 720,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 9290,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/9bd15642-6936-4fce-9bb8-c361c8ed0edb.jpg',
    rating: 4.7,
    reviews: 189,
    warranty: 24,
    inStock: true,
  },
  {
    id: 4,
    brand: 'Mutlu',
    model: 'Calcium Silver',
    capacity: 63,
    cranking: 550,
    voltage: 12,
    length: 242,
    width: 175,
    height: 190,
    price: 6790,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/16391dd5-0a8d-44bc-9b1b-5f25c0c406f6.jpg',
    rating: 4.6,
    reviews: 423,
    warranty: 18,
    inStock: true,
  },
  {
    id: 5,
    brand: 'Topla',
    model: 'Energy',
    capacity: 66,
    cranking: 620,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 7990,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/cbf2ce2b-862f-4880-83cd-491c799491d4.jpg',
    rating: 4.5,
    reviews: 312,
    warranty: 24,
    inStock: false,
  },
  {
    id: 6,
    brand: 'Tudor',
    model: 'Technica',
    capacity: 77,
    cranking: 760,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 10490,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/9bd15642-6936-4fce-9bb8-c361c8ed0edb.jpg',
    rating: 4.9,
    reviews: 678,
    warranty: 36,
    inStock: true,
  },
];

const carBrands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Ford', 'Hyundai', 'Kia', 'Honda', 'Nissan'];
const carModels: Record<string, string[]> = {
  'Toyota': ['Camry', 'Corolla', 'RAV4', 'Land Cruiser'],
  'BMW': ['3 Series', '5 Series', 'X5', 'X3'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
  'Volkswagen': ['Polo', 'Golf', 'Tiguan', 'Passat'],
  'Audi': ['A4', 'A6', 'Q5', 'Q7'],
};

export default function Index() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [capacityRange, setCapacityRange] = useState([40, 100]);
  const [crankingRange, setCrankingRange] = useState([400, 800]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBatteries = batteries.filter(battery => {
    const matchesCapacity = battery.capacity >= capacityRange[0] && battery.capacity <= capacityRange[1];
    const matchesCranking = battery.cranking >= crankingRange[0] && battery.cranking <= crankingRange[1];
    const matchesSearch = battery.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          battery.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCapacity && matchesCranking && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold gradient-text">PowerCell</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#selection" className="text-sm font-medium hover:text-primary transition-colors">Подбор</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center">3</span>
            </Button>
            <Button className="gradient-primary text-white hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              8 800 555-35-35
            </Button>
          </div>
        </div>
      </header>

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

      <section className="py-16 bg-muted/30" id="delivery">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Доставка и оплата</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставим в день заказа по Москве и МО. По России — от 1 до 3 дней
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto flex items-center justify-center">
                  <Icon name="CreditCard" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Удобная оплата</h3>
                <p className="text-muted-foreground">
                  Наличными, картой, безналичный расчет для юрлиц
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary mx-auto flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Официальная гарантия от производителя до 3 лет
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Отзывы клиентов</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Алексей М.', rating: 5, text: 'Отличный сервис! Помогли подобрать аккумулятор для BMW X5. Доставили в день заказа, установили прямо у дома. Рекомендую!', date: '15 января 2024' },
              { name: 'Мария К.', rating: 5, text: 'Заказывала аккумулятор для Toyota Camry. Менеджер проконсультировал по всем характеристикам, помог выбрать оптимальный вариант. Очень довольна покупкой!', date: '8 февраля 2024' },
              { name: 'Дмитрий П.', rating: 4, text: 'Хороший выбор аккумуляторов, адекватные цены. Доставка заняла чуть больше времени, чем обещали, но в целом всё отлично.', date: '3 марта 2024' },
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i}
                        name="Star" 
                        size={18}
                        className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" id="contacts">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Остались вопросы?</CardTitle>
                <CardDescription className="text-lg">Свяжитесь с нами любым удобным способом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <Icon name="Phone" size={32} className="mx-auto text-primary" />
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-lg font-bold">8 800 555-35-35</p>
                    <p className="text-sm text-muted-foreground">Ежедневно 9:00 - 21:00</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Icon name="Mail" size={32} className="mx-auto text-secondary" />
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-lg font-bold">info@powercell.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Icon name="MapPin" size={32} className="mx-auto text-accent" />
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-lg font-bold">Москва, ул. Примерная, 1</p>
                    <p className="text-sm text-muted-foreground">Самовывоз доступен</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">PowerCell</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональный подбор и продажа автомобильных аккумуляторов с 2010 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Все аккумуляторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">По марке авто</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Хиты продаж</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Акции</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>8 800 555-35-35</li>
                <li>info@powercell.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 PowerCell. Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
