import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            ИТР СИНЕРГИЯ | ВЕГА | Бифорком
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Решения
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection("contacts")}>
            Оставить заявку
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Технологии будущего для Татарстана
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Интеграция, безопасность, IT-инфраструктура от ИТР СИНЕРГИЯ, ГК ВЕГА
            и Бифорком Технолоджис
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("about")}
            className="text-lg px-8 py-4"
          >
            Узнать больше
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Кто мы?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Мы — объединение лидеров технологий: Интеграция Технологических
              Решений СИНЕРГИЯ Групп (интеграция в Татарстане), ГК ВЕГА (системы
              безопасности и видеоаналитика), Бифорком Технолоджис
              (IT-инфраструктура). Вместе мы создаем решения для цифровизации и
              автоматизации в Татарстане.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Интеграция Технологических Решений СИНЕРГИЯ Групп
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Интегратор решений в Татарстане. Внедрение, адаптация и
                  техническая поддержка передовых технологий для промышленных и
                  государственных предприятий.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Camera" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">ГК ВЕГА</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Поставщик технологий видеоаналитики, ПСИМ-платформ и систем
                  управления безопасностью. Решения для контроля периметра и
                  управления доступом.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Server" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Бифорком Технолоджис</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Поставщик IT-инфраструктуры: серверы, сети 5G/6G,
                  маршрутизаторы. Комплексные решения для высокоскоростной
                  передачи и обработки данных.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные технологические решения для цифровизации бизнеса и
              государственных структур
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Eye" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    Видеоаналитика и безопасность
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Системы распознавания лиц, контроля зон, интеграция со СКУД
                  для промышленных и государственных объектов. Полный контроль
                  периметра и внутренних зон.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Распознавание лиц и номеров</li>
                  <li>• Контроль доступа в зоны</li>
                  <li>• Интеграция с ПСИМ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Database" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">IT-инфраструктура</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Серверы ST2200, сети 5G/6G, маршрутизаторы для
                  высокоскоростной передачи данных. Современная инфраструктура
                  для цифровой трансформации.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Серверные решения ST2200</li>
                  <li>• Сети 5G/6G</li>
                  <li>• Высокопроизводительные маршрутизаторы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Cog" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">Интеграция решений</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Внедрение решений в Татарстане, адаптация под местные
                  требования, обучение персонала и постоянная техническая
                  поддержка.
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Адаптация под требования</li>
                  <li>• Обучение персонала</li>
                  <li>• Техническая поддержка 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => scrollToSection("contacts")}>
              Подробнее о решениях
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши проекты в Татарстане
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Успешно реализованные проекты для ключевых предприятий и
              организаций региона
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Building" size={20} className="text-blue-600" />
                  <span>Алабуга</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Система безопасности для особой экономической зоны: управление
                  СКУД, видеонаблюдение и контроль периметра.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-blue-600" />
                  <span>Пенсионный фонд</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Электронные очереди и модернизация IT-инфраструктуры для
                  повышения качества обслуживания граждан.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-blue-600" />
                  <span>Безопасный город</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Централизованное управление безопасностью городской
                  инфраструктуры с использованием современных технологий
                  видеоаналитики.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект и предложить оптимальные
              технологические решения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-lg">+7 (843) 123-45-67</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-lg">info@synergy-vega-biforcom.ru</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-lg">
                    Казань, ул. Техническая, д. 10
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Мы в соцсетях:
                </h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Оставить заявку
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              ИТР СИНЕРГИЯ | ВЕГА | Бифорком
            </div>
            <p className="text-gray-400 mb-6">
              Технологии будущего для Татарстана
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 ИТР СИНЕРГИЯ | ВЕГА | Бифорком. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
