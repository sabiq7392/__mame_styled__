import { Div, H2, Button, Span } from "../../../../../styles/MameStyled/core/HtmlTag";
import Preview from "../../../organisms/Preview";
import MameAccordion from "./Accordion";
import { BsChevronDown } from "react-icons/bs";

export default function ResultPreview() {
  return <>
    <Preview member="Accordion" noLandfield>
      {/* <Div> */}
        <MameAccordion isAlwaysOpen={true} />
        <MameAccordion isAlwaysOpen={true} />
      {/* </Div> */}
    </Preview>
  </>;
}
