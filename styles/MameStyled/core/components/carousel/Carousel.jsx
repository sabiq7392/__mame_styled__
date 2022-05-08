import { node } from "prop-types";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { Div } from "../../HtmlTag";
import { createElement } from "react";

export default function Carousel({ children, _ref, ...props }) {
  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          gap: "1rem",
        },
      })
    },
    children,
  );
}

Carousel.propTypes = {
  children: node.isRequired,
  ...requiredPropTypes,
};
