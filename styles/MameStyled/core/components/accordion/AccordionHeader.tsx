import { H2, Button, Div, H1, H3, H4, H5, H6 } from "../../HtmlTag";
// import { any, func, bool, number, oneOfType, string, node, element } from "prop-types";
import { createElement, ReactElement, ReactNode, Ref } from "react";
import { requiredProps } from "../../../constants/required-props.constant";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  isContentOpen: boolean; 
  // eslint-disable-next-line no-unused-vars
  setIsContentOpen(arg0: boolean): void;
  title: string;
  as?: typeof H1 | typeof H2 | typeof H3 | typeof H4 | typeof H5 | typeof H6;
  icon?: ReactNode;
  transitionSpeed?: number;
  _ref?: Ref<HTMLElement>;
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
}: Props): ReactElement {
  return createElement(
    as, 
    {},
    createElement(
      Button,
      {
        ref: _ref,
        onClick: () => setIsContentOpen(!isContentOpen),
        ...requiredProps(props, {
          cssXs: {
            display: "flex",
            height: "auto",
            background: "#111",
            fontSize: 18,
            padding: "1rem",
            width: "100%", 
            justifyContent: "space-between", 
            alignItems: "center", 
            minHeight: 44, 
            minWidth: 44,
            color: "inherit",
            border: "none",
            gap: "1rem",
            fontFamily: "inherit",
            cursor: "pointer",
            fontWeight: "inherit",
          },
        }),
      },
      <>
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
      </>
    )
  );
}
