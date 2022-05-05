import { Div } from "../../HtmlTag";
import { createElement, memo } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { bool } from "prop-types";
import { number } from "prop-types";
import { any } from "prop-types";
import { node } from "prop-types";

const AccordionBody = memo(function AccordionBody({ 
  isContentOpen, 
  transitionSpeed, 
  heightContent, 
  refContent, 
  children,
  ...props
}) {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
      cssXs: { 
        display: isContentOpen ? "grid" : setTimeout(() => "none", transitionSpeed),
        background: "#222", 
        color: "white", 
        overflow: "hidden", 
        transition: `height ${transitionSpeed}ms ease!important`,
        height: isContentOpen ? heightContent : 0,
      }
      }),
    },
    <Div
      ref={refContent}
      cssXs={{ padding: "1rem" }}
    >
      {children}
    </Div>
  );
});

AccordionBody.propTypes = {
  isContentOpen: bool.isRequired,
  heightContent: number.isRequired,
  refContent: any.isRequired,
  children: node.isRequired,
  transitionSpeed: number,
  ...requiredPropTypes,
};

export default AccordionBody;
