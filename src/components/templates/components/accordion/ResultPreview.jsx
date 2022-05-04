import { Div, H2, Button, Span } from "../../../../../styles/MameStyled/core/HtmlTag";
import Preview from "../../../organisms/Preview";
import Accordion from "./Accordion";
import { BsChevronDown } from "react-icons/bs";

export default function ResultPreview() {
  return <>
    <Preview member="Accordion" noLandfield>
      {/* <Div> */}
        <Accordion />
        <Div css={{ display: "grid" }}>
          <H2>
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
            >
              <Span>Example 1</Span>
              <Span cssXs={{ transition: "transform 400ms" }}>
                <BsChevronDown size={24} />
              </Span>
            </Button>
          </H2>
        </Div>
      {/* </Div> */}
    </Preview>
  </>;
}
