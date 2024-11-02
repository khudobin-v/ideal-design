import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const HeaderContact = () => {
  return (
    <Link
      target="blank"
      href="https://wa.me/79608515611"
      className="flex items-center gap-2"
    >
      <FaWhatsapp className="size-7" />
      <p className="text-lg font-medium">+7 960 851 56-11</p>
    </Link>
  );
};
