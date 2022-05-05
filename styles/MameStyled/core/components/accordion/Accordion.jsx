import { Div } from "../../HtmlTag";
import { createElement, memo } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { node } from "prop-types";

const Accordion = memo(function Accordion({ 
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
});

Accordion.propTypes = {
  children: node.isRequired,
  ...requiredPropTypes,
};

export default Accordion;
