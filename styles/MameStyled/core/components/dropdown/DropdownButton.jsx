import ChevronDownIcon from "../icons/ChevronDownIcon";
import { createElement } from "react";
import { Button, Span } from "../../HtmlTag";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { string, oneOfType, node, func, bool, element, shape, object } from "prop-types";

export default function DropdownButton({ 
  title = "Dropdown", 
  setIsOpen, 
  isOpen, 
  icon = <ChevronDownIcon size={18} />, 
  _ref,
  ...props 
}) {
  return createElement(
    Button,
    {
      onClick: () => setIsOpen(!isOpen),
      ref: _ref,
      ...requiredProps(props, {
        cssXs: {
          minHeight: 44,
          minWidth: 44,
          background: "#111",
          color: "white",
          border: "none",
          fontWeight: "bold",
          padding: "1rem",
          cursor: "pointer",
          transition: "200ms",
          fontFamily: "poppins",
          letterSpacing: 1.2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.4rem",
        },
        hoverXs: {
          filter: "brightness(140%)"
        },
      }),
    },
    <>
      {title} 
      <Span
        cssXs={{
          transition: "400ms",
          transform: isOpen && "rotate(180deg)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {icon}
      </Span>
    </>,
  );
}

DropdownButton.propTypes = {
  title: oneOfType([string, node]).isRequired,
  setIsOpen: func.isRequired,
  isOpen: bool.isRequired,
  icon: oneOfType([node, element]).isRequired,
  _ref: shape({ current: object }),
};
