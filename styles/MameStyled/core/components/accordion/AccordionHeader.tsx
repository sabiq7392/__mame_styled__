import { H2, Button, Div, H1, H3, H4, H5, H6 } from "../../HtmlTag";
// import { any, func, bool, number, oneOfType, string, node, element } from "prop-types";
import { createElement, ReactNode } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  isContentOpen: boolean; 
  // eslint-disable-next-line no-unused-vars
  setIsContentOpen(arg0: boolean): void;
  title: string;
  as?: typeof H1 | typeof H2 | typeof H3 | typeof H4 | typeof H5 | typeof H6;
  icon?: Element | ReactNode;
  transitionSpeed?: number;
  _ref?: any;
  iconColor?: string;
}

export default function AccordionHeader({ 
  _ref,
  isContentOpen, 
  setIsContentOpen, 
  transitionSpeed = 400, 
  title, 
  icon,
  as = H2,
  iconColor,
  ...props
}: Props) {
  return createElement(
    as, 
    {
      ...requiredProps(props, {
        cssXs: {
          display: "flex",
          height: "auto",
          background: "#111",
          fontSize: 18,
          padding: "1rem",
        },
      }),
    },
    <Button 
      ref={_ref}
      cssXs={{ 
        display: "flex", 
        width: "100%", 
        justifyContent: "space-between", 
        alignItems: "center", 
        minHeight: 44, 
        background: "inherit",
        minWidth: 44,
        color: "inhertit",
        border: "none",
        gap: "1rem",
        fontSize: "inherit",
        fontFamily: "inherit",
        cursor: "pointer",
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
        {icon || <ChevronDownIcon color={iconColor} /> }
      </Div>
    </Button>
  );
}
