import { FaMapPin, FaUser } from "react-icons/fa";
import { FaPhone, FaVk } from "react-icons/fa6";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const ContactsBlock = () => {
  return (
    <div className="flex h-[88vh] w-full flex-col justify-end gap-12">
      <h1 className="ml-20 text-5xl font-semibold uppercase max-sm:ml-4">
        Контакты
      </h1>
      <div className="ml-20 max-sm:ml-4">
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
          <li className="flex items-center gap-2">
            <FaVk size={20} />
            <Link
              className="hover:underline"
              href="https://vk.com/idealdesign2024"
            >
              Мы ВКонтакте
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram size={20} />
            <Link
              className="hover:underline"
              href="https://www.instagram.com/ideal__interior30/profilecard/?igsh=eWF4OHlrcTZkamo1"
            >
              Наш Instagram
            </Link>
          </li>
        </ul>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A011fdd511a86ac35f5d9c134fae5aae5868045b296b42486bef96253382cb93c&amp;source=constructor"
        width="100%"
        height="400"
      />
    </div>
  );
};
