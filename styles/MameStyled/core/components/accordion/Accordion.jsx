import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { node } from "prop-types";

export default function Accordion({ 
  children,
  ...props
}) {
  return createElement(
    Div,
    {
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

Accordion.propTypes = {
  children: node.isRequired,
  ...requiredPropTypes,
};
