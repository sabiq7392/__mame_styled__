import { Div } from "../../HtmlTag.ts";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { node } from "prop-types";

function Accordion({ 
  children,
  _ref,
  ...props
}) {
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

Accordion.propTypes = {
  children: node.isRequired,
  ...requiredPropTypes,
};

export default Accordion;
