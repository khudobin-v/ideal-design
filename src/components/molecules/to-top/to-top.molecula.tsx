"use client";

import { Button } from "@/components";
import { FaArrowUp } from "react-icons/fa6";
import { scrollTo } from "@/utils";
import { useScrollY } from "@/hooks";

export const ToTop = () => {
  const isScrolled = useScrollY(20);
  if (isScrolled) {
    return (
      <div className="animate-appearance msx-sm:right-6 fixed bottom-10 right-10 max-lg:bottom-6 max-sm:right-6">
        <Button
          className="flex items-center justify-center gap-2 rounded border px-2 shadow-lg"
          withIcon
          color="white"
          onClick={() => scrollTo("top")}
        >
          <FaArrowUp size={16} />
          <p className="lowercase first-letter:uppercase">Наверх</p>
        </Button>
      </div>
    );
  }
};
