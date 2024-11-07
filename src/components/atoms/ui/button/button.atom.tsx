import cn from "classnames";
import type { TButton } from "./index";

export const Button = ({
  children,
  onClick,
  className,
  withIcon = false,
  color = "primary",
}: TButton) => {
  const colorClassNames = cn({
    "bg-primary-500 hover:bg-primary-600 text-white": color === "primary",
    "bg-black  hover:bg-gray-900 text-white": color === "black",
    "bg-white hover:bg-gray-100 text-black": color === "white",
    "bg-transparent text-white": color === "transparent",
  });
  const paddingClassNames = cn({
    "p-1": withIcon,
    "px-6 py-3": !withIcon,
  });
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "font-medium uppercase transition-all duration-300",
        colorClassNames,
        paddingClassNames,
      )}
    >
      {children}
    </button>
  );
};
