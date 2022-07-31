import ChevronDownIcon from "../icons/ChevronDownIcon";
import { createElement } from "react";
import { Button, Span } from "../../HtmlTag";
import { requiredProps } from "../../../constants/required-props.constant";
import type { ReactNode, ReactElement, SetStateAction,  MutableRefObject } from "react";

// eslint-disable-next-line no-unused-vars

interface Props {
  title: string | ReactNode | ReactNode[];
  icon: ReactNode | ReactNode[];
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: SetStateAction<boolean>) => void;
  _ref?: MutableRefObject<HTMLElement | undefined>;
}

export default function DropdownButton({ 
  title = "Dropdown", 
  setIsOpen, 
  isOpen, 
  icon = <ChevronDownIcon size={18} />, 
  _ref, 
  ...props 
}: Props): ReactElement {
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
