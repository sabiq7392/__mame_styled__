import { createElement, ReactElement } from "react";
import { requiredProps } from "../../../constants/required-props.constant";
import { A } from "../../HtmlTag";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  title: string,
  href: string,
}

export default function NavLink({ title, href, ...props }: Props): ReactElement {
  return createElement(
    A,
    {
      href: href || "#",
      ...requiredProps(props, {
        cssXs: {
          color: "white",
          padding: ".8rem",
          fontSize: "1.2rem",
          minHeight: 44,
          minWidth: 44,
        },
        hoverXs: {
          filter: "brightness(70%)",
        },
      }),
    },
    title,
  );
}
