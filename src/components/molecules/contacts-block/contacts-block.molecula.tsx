import { FaMapPin, FaUser } from "react-icons/fa";

import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const ContactsBlock = () => {
  return (
    <div className="flex h-full w-full flex-col justify-around">
      <h1 className="ml-20 text-5xl font-semibold uppercase">Контакты</h1>
      <div className="ml-20">
        <ul className="flex flex-col gap-2 text-xl">
          <li className="flex items-center gap-2">
            <FaUser size={20} />
            <Link
              className="hover:underline"
              href="https://ideal-design.online"
            >
              Компания "IDEAL"
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <FaMapPin size={20} />
            <Link
              className="hover:underline"
              href="https://yandex.ru/maps/-/CDtUB44D"
            >
              г. Астрахань, ул. Коммунистическая, дом 68
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <FaPhone size={20} />
            <Link className="hover:underline" href="tel:+79608515611">
              +7 (960)-85-15-611
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <IoIosMail size={24} />
            <Link
              className="hover:underline"
              href="mailto:ideal.studiadizaina@yandex.ru"
            >
              ideal.studiadizaina@yandex.ru
            </Link>
          </li>
        </ul>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A011fdd511a86ac35f5d9c134fae5aae5868045b296b42486bef96253382cb93c&amp;source=constructor"
        width="100%"
        height="400"
      ></iframe>
    </div>
  );
};
