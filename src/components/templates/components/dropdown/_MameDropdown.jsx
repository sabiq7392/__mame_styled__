import { Div, Button, A, Span } from "../../../../../styles/MameStyled/core/HtmlTag";
import { BsChevronDown } from "react-icons/bs";
import { useState, useEffect, useRef, createElement } from "react";
import { requiredProps } from "../../../../../styles/MameStyled/utils/constants/requiredProps";

export default function MameDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [heightBody, setHeightBody] = useState();
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

  return <>
    <Dropdown>
      <DropdownButton 
        title="Dropdown"
        icon={<BsChevronDown size={18} />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <DropdownBody
        _ref={body}
        isOpen={isOpen}
        heightBody={heightBody}
      >
        <A>Action</A>
        <A>Another Action</A>
        <A>Something else</A>
      </DropdownBody>
    </Dropdown>
  </>;
}

function Dropdown({ children, ...props }) {
  return createElement(
    Div,
    {
      ...requiredProps(props, {
        cssXs: {
          width: "fit-content",
        },
      }),
    },
    children,
  );
}

function DropdownButton({ 
  title = "Dropdown", 
  setIsOpen, 
  isOpen, 
  icon = <BsChevronDown size={18} />, 
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
        }}
      >
        {icon}
      </Span>
    </>,
  );
}

function DropdownBody({ 
  _ref, 
  isOpen, 
  heightBody, 
  children, 
  ...props 
}) {
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
      ref={_ref}
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
