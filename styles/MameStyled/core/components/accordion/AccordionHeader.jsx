import { H2, Button, Div } from "../../HtmlTag";
import { BsChevronDown } from "react-icons/bs";

export default function AccordionHeader({ 
  refButtonAccordion, 
  setIsContentOpen, 
  isContentOpen, 
  transitionSpeed, 
  title, 
  icon 
}) {
  return <>
    <H2 cssXs={{ display: "flex", height: "auto" }}>
      <Button 
        ref={refButtonAccordion}
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
          cursor: "pointer"
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
          {icon || <BsChevronDown size={24} />}
        </Div>
      </Button>
    </H2>
  </>;
}
