import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  children: any;
  _ref?: any;
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
