import { Div } from "../../HtmlTag";
import { createElement, ReactNode } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[],
}

export default function NavbarContentWrapper({ children, ...props }: Props) {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          height: "100%",
          transition: "200ms",
          background: "inherit",
        },
        cssLg: {
          display: "flex",
        },
      }),
    },
    children,
  );
}
