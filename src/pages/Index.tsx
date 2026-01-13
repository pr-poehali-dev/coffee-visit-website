import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  const menuItems = {
    coffee: [
      { name: 'Эспрессо', price: 150, points: 15, description: 'Классический крепкий кофе' },
      { name: 'Американо', price: 180, points: 18, description: 'Мягкий и насыщенный' },
      { name: 'Капучино', price: 220, points: 22, description: 'С нежной молочной пенкой' },
      { name: 'Латте', price: 240, points: 24, description: 'Кофе с большим количеством молока' },
      { name: 'Флэт Уайт', price: 260, points: 26, description: 'Двойной эспрессо с бархатистой пенкой' },
      { name: 'Раф', price: 280, points: 28, description: 'Сливочный кофе с ванилью' },
    ],
    desserts: [
      { name: 'Чизкейк', price: 320, points: 32, description: 'Классический Нью-Йорк' },
      { name: 'Тирамису', price: 350, points: 35, description: 'Итальянский десерт с маскарпоне' },
      { name: 'Брауни', price: 280, points: 28, description: 'Шоколадный с грецким орехом' },
      { name: 'Круассан', price: 180, points: 18, description: 'Свежий французский' },
      { name: 'Макарон', price: 150, points: 15, description: 'Набор из 3 штук' },
    ],
  };

  const events = [
    { date: '15 января', title: 'Мастер-класс по латте-арт', time: '18:00' },
    { date: '22 января', title: 'Живая музыка: джазовый вечер', time: '19:00' },
    { date: '29 января', title: 'Дегустация новых сортов кофе', time: '17:00' },
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Лучшая кофейня в районе! Уютная атмосфера и невероятно вкусный кофе.' },
    { name: 'Дмитрий К.', rating: 5, text: 'Отличное место для работы за ноутбуком. Быстрый Wi-Fi и приятный персонал.' },
    { name: 'Елена С.', rating: 5, text: 'Обожаю их десерты! Тирамису просто тает во рту.' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/1b30d3c5-9c45-4164-bd89-528be04fe698/files/85db03ee-9c5b-43ee-80ef-9cbaac6bae1c.jpg',
    'https://cdn.poehali.dev/projects/1b30d3c5-9c45-4164-bd89-528be04fe698/files/8049a0bb-2aff-46e0-a159-4be7067e7074.jpg',
    'https://cdn.poehali.dev/projects/1b30d3c5-9c45-4164-bd89-528be04fe698/files/eac286e2-ad5f-43b3-b23c-c54bd1018263.jpg',
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Заходи</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">События</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 px-3 py-1">
              <Icon name="Award" size={16} className="mr-1" />
              {loyaltyPoints} баллов
            </Badge>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Ваша любимая кофейня
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Место, где каждая чашка кофе согревает душу, а каждый визит становится маленьким праздником
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Coffee" size={20} className="mr-2" />
              Смотреть меню
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MapPin" size={20} className="mr-2" />
              Как нас найти
            </Button>
          </div>
        </div>
      </section>

      <section id="loyalty" className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto border-2 border-accent/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2">
                <Icon name="Award" size={32} className="text-accent" />
                Программа лояльности
              </CardTitle>
              <CardDescription className="text-lg">
                Зарабатывайте баллы с каждой покупкой и получайте приятные бонусы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Coffee" size={32} className="text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">10 баллов = 1₽</h3>
                    <p className="text-sm text-muted-foreground">Копите баллы за покупки</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Gift" size={32} className="text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">500 баллов</h3>
                    <p className="text-sm text-muted-foreground">Бесплатный десерт</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Star" size={32} className="text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">1000 баллов</h3>
                    <p className="text-sm text-muted-foreground">Скидка 20%</p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ваш текущий баланс: <span className="font-bold text-accent text-lg">{loyaltyPoints} баллов</span>
                </p>
                <Button className="bg-accent hover:bg-accent/90">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Получить карту лояльности
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наше меню</h2>
          <Tabs defaultValue="coffee" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="coffee" className="text-lg">
                <Icon name="Coffee" size={20} className="mr-2" />
                Напитки
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-lg">
                <Icon name="Cake" size={20} className="mr-2" />
                Десерты
              </TabsTrigger>
            </TabsList>
            <TabsContent value="coffee" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {menuItems.coffee.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-2">+{item.points} баллов</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{item.price}₽</span>
                        <Button
                          size="sm"
                          onClick={() => setLoyaltyPoints(prev => prev + item.points)}
                        >
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="desserts" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {menuItems.desserts.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-2">+{item.points} баллов</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{item.price}₽</span>
                        <Button
                          size="sm"
                          onClick={() => setLoyaltyPoints(prev => prev + item.points)}
                        >
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Ближайшие события</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-4 text-center min-w-[80px]">
                      <Icon name="Calendar" size={24} className="mx-auto mb-2 text-accent" />
                      <p className="text-sm font-semibold">{event.date}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        {event.time}
                      </p>
                    </div>
                    <Button variant="outline">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Отзывы гостей</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">ул. Уютная, 15, Москва</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Ежедневно: 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@zahodi.cafe</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Icon name="Map" size={48} className="mx-auto mb-2" />
                    <p>Карта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Заходи</h3>
          <p className="mb-4">Ваша любимая кофейня</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm opacity-80">© 2026 Заходи. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
