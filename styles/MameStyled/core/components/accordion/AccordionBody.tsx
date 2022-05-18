import { Div } from "../../HtmlTag.ts";
import { createElement, memo, useRef, useEffect, useState } from "react";
import { requiredProps, requiredPropTypes } from "../../../utils/constants/requiredProps";
import { bool, number, any, node } from "prop-types";

const AccordionBody = memo(function AccordionBody({ 
  isContentOpen, 
  transitionSpeed, 
  _ref,
  children,
  ...props
}) {
  const [heightContent, setHeightContent] = useState();
  const content = useRef();

  const getHeightContent = () => {
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0].target.offsetHeight;

      return setHeightContent(entry);
    });

    observer.observe(content.current);
  };

  useEffect(() => {
    getHeightContent();
  }, []);

  return createElement(
    Div,
    {
      ref: _ref,
      ...requiredProps(props, {
        cssXs: { 
          display: isContentOpen && "grid",
          background: "#222", 
          color: "white", 
          overflow: "hidden", 
          transition: `height ${transitionSpeed}ms ease!important`,
          height: isContentOpen ? heightContent : 0,
        }
      }),
    },
    <Div
      ref={content}
      cssXs={{ padding: "1rem" }}
    >
      {children}
    </Div>
  );
});

AccordionBody.propTypes = {
  isContentOpen: bool.isRequired,
  _ref: any,
  children: node.isRequired,
  transitionSpeed: number,
  ...requiredPropTypes,
};

export default AccordionBody;
