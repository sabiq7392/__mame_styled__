import type { ReactElement, ReactNode } from "react";
import { createElement, useRef, useState, useEffect } from "react";
import { Div } from "../../HtmlTag";
import { requiredProps } from "../../../utils/constants/requiredProps";

interface Props {
  isOpen: boolean;
  children: ReactNode | ReactNode[];
}

export default function DropdownBody({ isOpen, children, ...props }: Props): ReactElement {
  const [heightBody, setHeightBody] = useState<number>(0);
  const body = useRef<HTMLBodyElement>();

  const getHeightBody = () => {
    const observer = new ResizeObserver((entries) => {
      const entry = (entries[0].target as HTMLBodyElement).offsetHeight;

      return setHeightBody(entry);
    });

    return observer.observe(body.current as HTMLBodyElement);
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
