import { Nav } from "../../HtmlTag";
import { createElement, ReactNode, Ref, ReactElement } from "react";
import { requiredProps } from "../../../constants/required-props.constant";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[],
  position?: string,
  direction?: "top" | "bottom",
  _ref: Ref<any>,
}

export default function Navbar({
  children, 
  position, 
  direction, 
  _ref,
  ...props
}: Props): ReactElement {
  const _position = position && {
    position: position || "relative",
    top: (direction === "top" && 0) ,
    bottom: direction === "bottom" && 0,
  };

  return createElement(
    Nav,
    { 
      ref: _ref,
      ...requiredProps(props, {
        cssXs: {
          background: "#111", 
          zIndex: 100,
          width: "100%",
          padding: "1rem",
          ..._position as object,
        },
        cssLg: {
          padding: "0.5rem 2rem",
        },
      }),
    },
    children,
  );
}
