import { createElement, useRef, useState, useEffect } from "react";
import { Div } from "../../HtmlTag";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { bool, node } from "prop-types";

export default function DropdownBody({ 
  isOpen, 
  children, 
  ...props 
}) {
  const [heightBody, setHeightBody] = useState(0);
  const body = useRef();

  const getHeightBody = () => {
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0].target.offsetHeight;

      return setHeightBody(entry);
    });

    observer.observe(body.current);
  };

  useEffect(() => {
    getHeightBody();
  }, []);

  return createElement(
    Div, 
    {
      ...requiredProps(props, {
        cssXs: {
          overflow: "hidden",
          background: "#111",
          dispaly: "grid",
          transition: "400ms",
          height: isOpen ? heightBody : 0,
        },
      }),
    },
    <Div 
      ref={body}
      cssXs={{
        display: "grid",
        padding: "1rem",
        gap: "1rem",
        color: "white",
      }}
    >
      {children}
    </Div>,
  );
}

DropdownBody.propTypes = {
  isOpen: bool.isRequired,
  children: node.isRequired,
};
