import { Div } from "../../HtmlTag";
import { createElement, ReactNode, ReactElement, Ref } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[];
  _ref: Ref<any>;
}

export default function CarouselItemsContainer({ children, _ref, ...props }: Props): ReactElement {
  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
        className: "mame-carousel-items-container",
        cssXs: {
          display: "flex",
          background: "#222",
          width: "100%",
          // height: 400,
          overflowX: "hidden",
        },
      }),
    },
    children,
  );
}
