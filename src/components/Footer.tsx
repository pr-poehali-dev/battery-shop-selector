import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <>
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
    </>
  );
}
