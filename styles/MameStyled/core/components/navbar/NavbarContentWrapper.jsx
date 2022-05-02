import { node } from "prop-types";
import { Div } from "../../HtmlTag.styled";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";

export default function NavbarContentWrapper({ children, ...props }) {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          display: "grid",
          height: "100%",
          transition: "200ms",
          background: "inherit",
        },
        cssLg: {
          display: "flex",
        },
      }),
    },
    children,
  );
}

NavbarContentWrapper.propTypes = {
  children: node.isRequired,
  ...requiredPropTypes,
};
