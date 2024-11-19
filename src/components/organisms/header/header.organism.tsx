"use client";

import { Button, HeaderContact, Logo, Menu } from "@/components/";

import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import cn from "classnames";
import { useScrollY } from "@/hooks";
import { useState } from "react";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const isScrolled = useScrollY();

  const blurClassNames = cn({
    "backdrop-blur-sm bg-black bg-opacity-20": isScrolled,
  });
  const openedBlurClassNames = cn({
    "backdrop-blur-sm bg-black bg-opacity-20": !isScrolled,
  });

  return (
    <header
      className={cn(
        "fixed z-50 flex w-full flex-col gap-3 px-4 py-4 max-xl:py-3 max-sm:py-2 sm:px-4 md:px-6 lg:px-12 xl:px-24 1.5xl:px-16 2xl:px-32",
        blurClassNames,
      )}
    >
      <div className="grid w-full grid-cols-2 items-center justify-between transition-all duration-[400ms] 1.5xl:grid-cols-4 1.75xl:grid-cols-3 2xl:grid-cols-3 2.25xl:grid-cols-3">
        <div className="flex items-center justify-start">
          <Logo />
        </div>
        <div className="hidden items-center justify-center 1.5xl:col-span-2 1.5xl:flex 1.75xl:col-span-1 1.75xl:flex 2xl:col-span-1 2xl:flex 2.25xl:col-span-1 2.25xl:flex">
          <Menu />
        </div>
        <div className="flex items-center justify-end max-1.5xl:hidden">
          <HeaderContact />
        </div>
        <div className="ml-1 hidden items-center justify-end max-1.5xl:flex">
          <Button
            withIcon
            color="transparent"
            onClick={() => setIsOpened(!isOpened)}
          >
            {isOpened ? (
              <IoCloseSharp className="h-6 w-6" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isOpened && (
        <div
          className={cn(
            "hidden animate-appearance flex-col pb-2 max-1.5xl:flex",
            openedBlurClassNames,
          )}
        >
          <Menu type="vertical" />
          <HeaderContact />
        </div>
      )}
    </header>
  );
};
