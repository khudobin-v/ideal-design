"use client";

import { Button } from "@/components/";
import { Link } from "react-scroll";

export const HeroBlock = () => {
  return (
    <div className="flex h-screen w-1/2 flex-col items-center justify-center gap-4 selection:bg-white selection:text-black max-lg:w-full max-lg:px-12">
      <h1 className="text-6xl font-bold tracking-wide max-lg:text-5xl">
        Ideal
      </h1>
      <p className="text-center text-base max-lg:text-sm">
        Создаём уникальные интерьеры, отражающие ваш стиль и образ жизни. Мы
        предлагаем комплексный подход – от разработки концепции до реализации
        проекта, с вниманием к каждой детали.
      </p>
      <Link to="about" smooth>
        <Button color="white" className="rounded">
          О компании
        </Button>
      </Link>
    </div>
  );
};
