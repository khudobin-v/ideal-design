"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { logoPicture } from "@/components/atoms/logo/index";
import { scrollTo } from "@/utils";

export const Logo = () => {
  return (
    <Link to="/" className="cursor-pointer" onClick={() => scrollTo("top")}>
      <Image
      className="clear-start h-[40px] w-[40px] select-none max-xl:h-[35px] max-xl:w-[35px] max-lg:h-[30px] max-lg:w-[30px]"
        draggable={false}
        src={logoPicture}
        alt="Logo"
      />
    </Link>
  );
};
