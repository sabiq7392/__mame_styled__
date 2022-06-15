import { Div } from "../../HtmlTag";
import { createElement, useRef, useEffect, useState, ReactElement, ReactNode } from "react";
import { requiredProps } from "../../../utils/constants/requiredProps";
import { HTMLTag } from "../../utils/types";

interface Props extends HTMLTag {
  isContentOpen: boolean;
  transitionSpeed: number;
  _ref?: any;
  children: ReactNode;
}

export default function AccordionBody({ 
  isContentOpen, 
  transitionSpeed, 
  _ref,
  children,
  ...props
}: Props): ReactElement {
  const [heightContent, setHeightContent] = useState(0);
  const content = useRef();

  const getHeightContent = () => {
    const observer = new ResizeObserver((entries) => {
      const entry = (entries[0].target as HTMLElement).offsetHeight;

      return setHeightContent(entry);
    });

    observer.observe(content.current as unknown as Element);
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
          display: (isContentOpen as any) && "grid",
          background: "#222", 
          color: "white", 
          overflow: "hidden", 
          transition: `height ${transitionSpeed}ms ease!important`,
          height: isContentOpen ? heightContent : 0,
        },
      }),
    },
    <Div
      ref={content}
      cssXs={{ paddingTop: ".8rem" }}
    >
      {children}
    </Div>
  );
}
