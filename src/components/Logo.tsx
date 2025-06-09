import React from "react";
import Icon from "@/components/ui/icon";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "vertical";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "horizontal",
  className = "",
}) => {
  const sizeClasses = {
    sm: {
      icon: 20,
      text: "text-lg",
      spacing: "gap-2",
    },
    md: {
      icon: 28,
      text: "text-2xl",
      spacing: "gap-3",
    },
    lg: {
      icon: 36,
      text: "text-4xl",
      spacing: "gap-4",
    },
  };

  const currentSize = sizeClasses[size];
  const isVertical = variant === "vertical";

  return (
    <div
      className={`
      flex items-center font-montserrat font-bold
      ${isVertical ? "flex-col text-center" : "flex-row"}
      ${currentSize.spacing} 
      ${className}
    `}
    >
      <div
        className="
        relative p-2 rounded-xl
        bg-gradient-to-br from-purple-500 to-purple-700
        shadow-lg hover:shadow-xl transition-all duration-300
        hover:scale-110 group
      "
      >
        <Icon
          name="Rocket"
          size={currentSize.icon}
          className="text-white group-hover:rotate-12 transition-transform duration-300"
        />
        <div
          className="
          absolute inset-0 rounded-xl
          bg-gradient-to-br from-purple-400 to-purple-600
          opacity-0 group-hover:opacity-20 transition-opacity duration-300
        "
        />
      </div>

      <div
        className={`
        bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
        bg-clip-text text-transparent
        ${currentSize.text}
        hover:from-purple-500 hover:via-purple-600 hover:to-purple-700
        transition-all duration-300
        ${isVertical ? "mt-1" : ""}
      `}
      >
        Поехали!
      </div>
    </div>
  );
};

export default Logo;
