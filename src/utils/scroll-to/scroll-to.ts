import { TScrollTo } from "./index";
import { animateScroll } from "react-scroll";

export const scrollTo = (direction: TScrollTo, options: any = {}) => {
  switch (direction) {
    case "bottom":
      animateScroll.scrollToBottom(options);
    default:
      animateScroll.scrollToTop(options);
  }
};
