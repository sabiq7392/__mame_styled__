import { oneOfType, node, string } from "prop-types";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { A } from "../../HtmlTag";

export default function NavLink({ title, href, ...props }) {
  return createElement(
    A,
    {
      href: href || "#",
      ...requiredProps(props, {
        cssXs: {
          color: "white",
          padding: ".8rem",
          fontSize: "1.2rem",
          minHeight: 44,
          minWidth: 44,
        },
        hoverXs: {
          filter: "brightness(70%)",
        },
      }),
    },
    title,
  );
}

NavLink.propTypes = {
  title: oneOfType([string, node]).isRequired,
  href: string.isRequired,
  ...requiredPropTypes,
};
