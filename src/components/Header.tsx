import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header
      className="
      w-full bg-white/80 backdrop-blur-md 
      border-b border-gray-200/50
      sticky top-0 z-50
      px-6 py-4
    "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo size="md" />

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="
            text-gray-700 hover:text-purple-600 
            font-medium transition-colors duration-200
            hover:scale-105 transform
          "
          >
            Главная
          </a>
          <a
            href="#"
            className="
            text-gray-700 hover:text-purple-600 
            font-medium transition-colors duration-200
            hover:scale-105 transform
          "
          >
            О нас
          </a>
          <a
            href="#"
            className="
            text-gray-700 hover:text-purple-600 
            font-medium transition-colors duration-200
            hover:scale-105 transform
          "
          >
            Контакты
          </a>
        </nav>

        <button
          className="
          bg-gradient-to-r from-purple-500 to-purple-600
          text-white px-6 py-2 rounded-lg
          font-medium hover:from-purple-600 hover:to-purple-700
          transform hover:scale-105 transition-all duration-200
          shadow-lg hover:shadow-xl
        "
        >
          Начать
        </button>
      </div>
    </header>
  );
};

export default Header;
