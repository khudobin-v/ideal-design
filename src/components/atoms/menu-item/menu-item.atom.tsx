"use client";

import { Link } from "react-scroll";
import type { TMenuItem } from "@/components/atoms/menu-item/index";

export const MenuItem = ({ label, id }: TMenuItem) => {
  return (
    <Link to={id} smooth>
      <div className="relative cursor-pointer pb-0.5 text-base font-medium uppercase text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-[400ms] hover:after:w-full xl:text-base 1.5xl:text-base 1.75xl:text-base 2xl:text-base 2.25xl:text-lg">
        {label}
      </div>
    </Link>
  );
};
