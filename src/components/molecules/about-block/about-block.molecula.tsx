import { MdOutlineCoPresent, MdOutlineDesignServices } from "react-icons/md";

import Image from "next/image";
import { IoChatboxOutline } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";

export const AboutBlock = () => {
  return (
    <div className="flex flex-col">
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
              стремимся к внедрению современных технологий, чтобы обеспечить
              нашим клиентам максимальный комфорт и стиль.
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

      <div className="flex flex-col gap-16 p-20 pt-0 max-md:gap-6">
        <h1 className="text-4xl font-semibold uppercase text-black">
          Что мы предлагаем
        </h1>
        <p className="text-xl max-sm:text-lg">
          Мы предлагаем широкий спектр услуг по дизайну интерьера и экстерьера,
          включая:
        </p>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-6">
          <div className="flex w-full flex-row gap-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
              <IoChatboxOutline />
            </div>
            <p className="text-xl max-sm:text-lg">
              Проведение консультаций с клиентами для выяснения их потребностей
              и пожеланий.
            </p>
          </div>
          <div className="flex w-full flex-row gap-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
              <SiGoogledocs />
            </div>
            <p className="text-xl max-sm:text-lg">
              Разработка концепций дизайна и подготовка проектной документации.
            </p>
          </div>
          <div className="flex w-full flex-row gap-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
              <MdOutlineDesignServices />
            </div>
            <p className="text-xl max-sm:text-lg">
              Подбор материалов и декора, контроль за выполнением работ и
              соблюдением сроков.
            </p>
          </div>
          <div className="flex w-full flex-row gap-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black font-medium text-white">
              <MdOutlineCoPresent />
            </div>
            <p className="text-xl max-sm:text-lg">
              Проведение итоговой презентации готового проекта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
