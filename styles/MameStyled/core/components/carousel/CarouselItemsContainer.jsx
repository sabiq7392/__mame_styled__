import { any, node } from "prop-types";
import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

export default function CarouselItemsContainer({ children, _ref, ...props }) {
  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
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

CarouselItemsContainer.propTypes = {
  children: node.isRequired,
  _ref: any.isRequired,
  ...requiredPropTypes,
};
