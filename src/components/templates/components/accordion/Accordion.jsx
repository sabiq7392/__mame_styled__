import { Button, Div, H2, P, Span } from "../../../../../styles/MameStyled/core/HtmlTag";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export default function Accordion() {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return <>
    <Div debug css={{ display: "flex", flexDirection: "column", transition: "400ms" }}>
      <H2 css={{ display: "flex", height: "auto" }}>
        <Button 
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
          }}
          onClick={() => setIsContentOpen(!isContentOpen)}
        >
          <Span>Example 1</Span>
          <Span 
            cssXs={{ 
              display: "grid", 
              placeItems: "center", 
              transform: isContentOpen && "rotate(180deg)", 
              transition: "transform 400ms" 
            }}
          >
            <BsChevronDown size={24} />
          </Span>
        </Button>
      </H2>
      <Div 
        cssXs={{ 
          display: "grid",
          background: "#222", 
          padding: isContentOpen ? "1rem" : "0rem 1rem", 
          color: "white", 
          overflow: "hidden", 
          transition: "height 400ms",
          height: isContentOpen ? "100%" : 0
        }}
      >
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima accusamus quia, voluptatem, obcaecati corporis debitis 
          ratione eos et saepe officia explicabo. Accusamus tempore eum aspernatur error nobis accusantium voluptatum?

          <br />
          <br />

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsum ipsa voluptate cum ratione illum placeat a 
          dolorum assumenda praesentium explicabo vitae nihil laboriosam dicta, minima nulla accusamus optio? Atque.
        </P>
      </Div>
    </Div>
  </>;
}
