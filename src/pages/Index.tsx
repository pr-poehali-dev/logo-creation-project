import React from "react";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Logo size="lg" variant="vertical" />
          </div>

          <h1
            className="
            text-5xl md:text-6xl font-bold font-montserrat
            bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900
            bg-clip-text text-transparent
            mb-6 leading-tight
          "
          >
            Добро пожаловать!
          </h1>

          <p
            className="
            text-xl text-gray-600 mb-12 max-w-2xl mx-auto
            leading-relaxed
          "
          >
            Создавайте потрясающие веб-сайты с помощью современных технологий и
            нашего интуитивно понятного интерфейса
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="
              bg-gradient-to-r from-purple-500 to-purple-600
              text-white px-8 py-4 rounded-xl font-semibold
              hover:from-purple-600 hover:to-purple-700
              transform hover:scale-105 transition-all duration-200
              shadow-lg hover:shadow-xl
              flex items-center justify-center gap-2
            "
            >
              <Icon name="Rocket" size={20} />
              Начать проект
            </button>

            <button
              className="
              border-2 border-purple-200 text-purple-700
              px-8 py-4 rounded-xl font-semibold
              hover:bg-purple-50 hover:border-purple-300
              transform hover:scale-105 transition-all duration-200
              flex items-center justify-center gap-2
            "
            >
              <Icon name="Play" size={20} />
              Посмотреть демо
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="
            text-3xl font-bold font-montserrat text-center mb-12
            text-gray-800
          "
          >
            Почему выбирают нас?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="
              bg-white p-8 rounded-2xl shadow-lg
              hover:shadow-xl transition-all duration-300
              transform hover:-translate-y-2
              border border-purple-100
            "
            >
              <div
                className="
                w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600
                rounded-xl flex items-center justify-center mb-6
              "
              >
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Быстрая разработка
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Создавайте сайты в разы быстрее благодаря современным
                инструментам и готовым компонентам
              </p>
            </div>

            <div
              className="
              bg-white p-8 rounded-2xl shadow-lg
              hover:shadow-xl transition-all duration-300
              transform hover:-translate-y-2
              border border-purple-100
            "
            >
              <div
                className="
                w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600
                rounded-xl flex items-center justify-center mb-6
              "
              >
                <Icon name="Palette" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Красивый дизайн
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Профессиональные шаблоны и компоненты для создания впечатляющих
                интерфейсов
              </p>
            </div>

            <div
              className="
              bg-white p-8 rounded-2xl shadow-lg
              hover:shadow-xl transition-all duration-300
              transform hover:-translate-y-2
              border border-purple-100
            "
            >
              <div
                className="
                w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600
                rounded-xl flex items-center justify-center mb-6
              "
              >
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Надежность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Проверенные технологии и лучшие практики для стабильной работы
                вашего сайта
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
