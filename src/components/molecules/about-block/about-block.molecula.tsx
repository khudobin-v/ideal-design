import Image from "next/image";

export const AboutBlock = () => {
  return (
    <div className="flex flex-row gap-60 p-20 max-xl:gap-40 max-sm:p-8">
      <div className="flex flex-col gap-16">
        <h1 className="text-4xl font-semibold uppercase text-black">
          О компании
        </h1>
        <div className="flex w-full flex-row gap-8">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
            1
          </div>
          <p className="text-xl max-sm:text-lg">
            Дизайн студия IDEAL обладает более чем 1О-летним опытом в сфере
            оформления интерьеров и экстерьеров. Наша команда профессионалов
            создает уникальные проекты, которые гармонично сочетают
            функциональность и эстетику. Мы уделяем внимание каждой детали и
            стремимся к внедрению современных технологий, чтобы обеспечить нашим
            клиентам максимальный комфорт и стиль.
          </p>
        </div>
        <div className="flex w-full flex-row gap-8">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
            2
          </div>
          <p className="text-xl max-sm:text-lg">
            Благодаря глубокому пониманию рынка и индивидуальному подходу к
            каждому клиенту. мы помогаем реализовать их мечты, создавая
            пространства, отражающие их личность и образ жизни.
          </p>
        </div>
      </div>
      <Image
        src="/about-pic.jpg"
        width={854}
        height={1280}
        alt="About picture"
        className="h-[85vh] max-lg:hidden max-md:hidden max-sm:hidden"
      />
    </div>
  );
};
