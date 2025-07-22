import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    route: '',
    cargo: '',
    weight: '',
    date: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Заявка принята! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Truck" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">ТрансЛогистика</h1>
                <p className="text-sm text-muted-foreground">Грузоперевозки по России</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors">Парк машин</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Работаем с 2010 года</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Грузоперевозки <br />
                <span className="text-blue-200">по всей России</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Надежная доставка грузов тентованными автомобилями. 
                Профессиональная логистика для вашего бизнеса.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-blue-200" />
                  <span>24/7 диспетчерская</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-blue-200" />
                  <span>Страхование грузов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} className="text-blue-200" />
                  <span>GPS мониторинг</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={24} className="text-blue-200" />
                  <span>Опытные водители</span>
                </div>
              </div>
            </div>
            
            {/* Order Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Подать заявку на перевозку</CardTitle>
                <CardDescription>Заполните форму и получите расчет стоимости</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input 
                        id="company" 
                        placeholder="ООО Компания"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Контактное лицо *</Label>
                      <Input 
                        id="contact" 
                        placeholder="Иван Иванов"
                        required
                        value={formData.contact}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (999) 123-45-67"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="mail@company.ru"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="route">Маршрут *</Label>
                    <Input 
                      id="route" 
                      placeholder="Москва - Санкт-Петербург"
                      required
                      value={formData.route}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cargo">Тип груза</Label>
                      <Input 
                        id="cargo" 
                        placeholder="Оборудование"
                        value={formData.cargo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Вес (т)</Label>
                      <Input 
                        id="weight" 
                        placeholder="5"
                        value={formData.weight}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date">Дата отправки</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="comments">Дополнительная информация</Label>
                    <Textarea 
                      id="comments" 
                      placeholder="Особенности груза, требования к перевозке..."
                      value={formData.comments}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по грузоперевозкам с профессиональным подходом к каждому заказу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <CardTitle>Тентованные грузовики</CardTitle>
                <CardDescription>
                  Перевозка грузов различных габаритов в закрытых тентованных фургонах
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Межрегиональные перевозки</CardTitle>
                <CardDescription>
                  Доставка грузов по всей территории России с соблюдением сроков
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <CardTitle>Сборные грузы</CardTitle>
                <CardDescription>
                  Экономичная доставка небольших партий товаров в составе сборного груза
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <CardTitle>Срочные перевозки</CardTitle>
                <CardDescription>
                  Экспресс-доставка грузов в кратчайшие сроки по индивидуальному графику
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Страхование грузов</CardTitle>
                <CardDescription>
                  Полное страховое покрытие груза на весь период транспортировки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <CardTitle>Документооборот</CardTitle>
                <CardDescription>
                  Полное ведение документооборота и отчетность по каждой перевозке
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">География доставки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Организуем грузоперевозки по всей России - от Калининграда до Владивостока
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="/img/1cc0d0e4-608b-4bcc-89a8-907ca8d554ee.jpg" 
                alt="Карта России с маршрутами" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Популярные направления</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-semibold">Москва → Санкт-Петербург</p>
                    <p className="text-sm text-muted-foreground">635 км, от 1 дня</p>
                  </div>
                  <Badge variant="secondary">Ежедневно</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-semibold">Москва → Екатеринбург</p>
                    <p className="text-sm text-muted-foreground">1416 км, от 2 дней</p>
                  </div>
                  <Badge variant="secondary">3 раза в неделю</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-semibold">Москва → Новосибирск</p>
                    <p className="text-sm text-muted-foreground">3354 км, от 4 дней</p>
                  </div>
                  <Badge variant="secondary">2 раза в неделю</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-semibold">Санкт-Петербург → Казань</p>
                    <p className="text-sm text-muted-foreground">1143 км, от 2 дней</p>
                  </div>
                  <Badge variant="secondary">2 раза в неделю</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Основные регионы доставки</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Центральный ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Москва и Московская область</li>
                  <li>• Тверская область</li>
                  <li>• Ярославская область</li>
                  <li>• Владимирская область</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Северо-Западный ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Санкт-Петербург и ЛО</li>
                  <li>• Новгородская область</li>
                  <li>• Псковская область</li>
                  <li>• Архангельская область</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Уральский ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Екатеринбург</li>
                  <li>• Челябинск</li>
                  <li>• Пермь</li>
                  <li>• Тюмень</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Сибирский ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Новосибирск</li>
                  <li>• Омск</li>
                  <li>• Красноярск</li>
                  <li>• Иркутск</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Южный ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ростов-на-Дону</li>
                  <li>• Краснодар</li>
                  <li>• Волгоград</li>
                  <li>• Астрахань</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Дальневосточный ФО</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Владивосток</li>
                  <li>• Хабаровск</li>
                  <li>• Благовещенск</li>
                  <li>• Якутск</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */
      <section id="fleet" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Тентованный транспорт</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Специализируемся на перевозках тентованными автомобилями - универсальное решение для большинства грузов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="/img/054339ee-be6a-4d05-9628-0b3a42da60d1.jpg" 
                alt="Тентованный грузовик" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Преимущества тентованных грузовиков</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Shield" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Защита от погодных условий</h4>
                  <p className="text-muted-foreground">
                    Тент надежно защищает груз от дождя, снега, пыли и ветра в любое время года
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Package" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Универсальность</h4>
                  <p className="text-muted-foreground">
                    Подходят для перевозки различных типов грузов: от паллетированной продукции до строительных материалов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="DollarSign" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Оптимальная стоимость</h4>
                  <p className="text-muted-foreground">
                    Экономичное решение с отличным соотношением цены и качества перевозки
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Zap" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Быстрая загрузка/разгрузка</h4>
                  <p className="text-muted-foreground">
                    Боковая и задняя загрузка значительно сокращают время погрузочных работ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">Технические характеристики</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">1.5-3т</div>
                  <CardTitle>Малотоннажные</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>Длина: до 4.2м</div>
                    <div>Ширина: 2.0м</div>
                    <div>Высота: 2.2м</div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">5-10т</div>
                  <CardTitle>Среднетоннажные</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>Длина: до 7.5м</div>
                    <div>Ширина: 2.45м</div>
                    <div>Высота: 2.7м</div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">15-20т</div>
                  <CardTitle>Большегрузные</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>Длина: до 13.6м</div>
                    <div>Ширина: 2.45м</div>
                    <div>Высота: 2.9м</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Типы грузов для тентованных перевозок</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Icon name="Box" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Паллетированные грузы</h4>
                  <p className="text-sm text-muted-foreground">Товары на европаллетах и стандартных поддонах</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Shirt" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Текстиль и одежда</h4>
                  <p className="text-sm text-muted-foreground">Готовая продукция легкой промышленности</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Wrench" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Оборудование</h4>
                  <p className="text-sm text-muted-foreground">Промышленное и бытовое оборудование</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Home" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Стройматериалы</h4>
                  <p className="text-sm text-muted-foreground">Сухие строительные смеси, плитка, утеплитель</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Car" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Автозапчасти</h4>
                  <p className="text-sm text-muted-foreground">Комплектующие для автомобилей</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Package" size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Товары народного потребления</h4>
                  <p className="text-sm text-muted-foreground">Бытовая техника, мебель, игрушки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании ТрансЛогистика</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Компания «ТрансЛогистика» работает на рынке грузоперевозок с 2010 года. 
                За это время мы зарекомендовали себя как надежный партнер для сотен предприятий 
                по всей России.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Мы специализируемся на перевозке грузов тентованными автомобилями различной 
                грузоподъемности. Наш подход основан на профессионализме, надежности и 
                индивидуальном подходе к каждому клиенту.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1500+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Единиц техники</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">13 лет</div>
                  <div className="text-muted-foreground">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Выполненных заказов</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/20817987-e823-4cff-9a29-85d6add2db81.jpg" 
                alt="Логистический центр" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом для получения консультации и расчета стоимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription>+7 (495) 123-45-67</CardDescription>
                <CardDescription className="text-xs">Круглосуточно</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>info@translogistics.ru</CardDescription>
                <CardDescription className="text-xs">Ответим в течение часа</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription>г. Москва, ул. Транспортная, 15</CardDescription>
                <CardDescription className="text-xs">Пн-Пт: 9:00-18:00</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <CardTitle>Мессенджеры</CardTitle>
                <CardDescription>WhatsApp, Telegram</CardDescription>
                <CardDescription className="text-xs">Быстрая связь</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Truck" size={28} className="text-white" />
              <div>
                <h3 className="text-xl font-bold">ТрансЛогистика</h3>
                <p className="text-blue-200 text-sm">Надежные грузоперевозки</p>
              </div>
            </div>
            <div className="text-center md:text-right text-blue-200">
              <p>&copy; 2024 ТрансЛогистика. Все права защищены.</p>
              <p className="text-sm mt-1">ИНН: 7712345678 | ОГРН: 1127746123456</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;