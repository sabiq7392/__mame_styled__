import { Div } from "../../HtmlTag";
import { createElement } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { node } from "prop-types";

export default function Dropdown({ children, ...props }) {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          width: "fit-content",
        },
      }),
    },
    children,
  );
}

Dropdown.propTypes = {
  children: node.isRequired,
};
