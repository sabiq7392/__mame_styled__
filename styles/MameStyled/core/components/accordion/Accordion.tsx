import { Div } from "../../HtmlTag";
import { createElement, ReactNode, Ref } from "react";
import { requiredProps } from "../../../constants/required-props.constant";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[];
  _ref?: Ref<HTMLElement>;
}

export default function Accordion({ 
  children,
  _ref,
  ...props
}: Props) {
  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
        cssXs: {
          display: "flex",
          flexDirection: "column",
        },
      }),
    },
    children,
  );
}
