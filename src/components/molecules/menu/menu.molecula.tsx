import { MenuItem } from "@/components/atoms";
import cn from "classnames";
import { menuData, TMenu } from "./index";

export const Menu = ({ type = "horyzontal" }: TMenu) => {
  const typeClassNames = cn({
    "flex w-full items-center justify-between": type === "horyzontal",
    "flex flex-col w-full items-start justify-between": type === "vertical",
  });
  return (
    <div className={cn(typeClassNames)}>
      {menuData.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </div>
  );
};
