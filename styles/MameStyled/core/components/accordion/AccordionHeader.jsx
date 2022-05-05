import { H2, Button, Div, H1, H3, H4, H5, H6 } from "../../HtmlTag";
import { BsChevronDown } from "react-icons/bs";
import { any, func, bool, number, oneOfType, string, node, element } from "prop-types";
import { createElement } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { oneOf } from "prop-types";

export default function AccordionHeader({ 
  refButtonAccordion, 
  setIsContentOpen, 
  isContentOpen, 
  transitionSpeed = 400, 
  title, 
  icon,
  as = H2,
  ...props
}) {
  return createElement(
    as, 
    {
      ...requiredProps(props, {
        cssXs: {
          display: "flex",
          height: "auto",
        },
      }),
    },
    <Button 
      ref={refButtonAccordion}
      cssXs={{ 
        display: "flex", 
        width: "100%", 
        justifyContent: "space-between", 
        alignItems: "center", 
        minHeight: 44, 
        minWidth: 44,
        background: "#111",
        color: "white",
        border: "none",
        padding: "1rem",
        fontSize: 18,
        cursor: "pointer"
      }}
      onClick={() => setIsContentOpen(!isContentOpen)}
    >
      <Div>{title || "Example"}</Div>
      <Div 
        cssXs={{ 
          display: "grid", 
          placeItems: "center", 
          transform: isContentOpen && "rotate(180deg)", 
          transition: `transform ${transitionSpeed}ms ease!important`, 
        }}
      >
        {icon || <BsChevronDown size={24} />}
      </Div>
    </Button>
  );
}

AccordionHeader.propTypes = {
  refButtonAccordion: any.isRequired,
  setIsContentOpen: func.isRequired,
  isContentOpen: bool.isRequired,
  transitionSpeed: number,
  title: oneOfType([string, node]).isRequired,
  icon: element,
  as: oneOf([H1, H2, H3, H4, H5, H6]),
  ...requiredPropTypes,
};
