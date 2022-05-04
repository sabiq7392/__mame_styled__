import Preview from "../../../organisms/Preview";
import MameAccordion from "./Accordion";

export default function ResultPreview() {
  return <>
    <Preview member="Accordion" noLandfield>
      <MameAccordion isAlwaysOpen={true} />
      <MameAccordion isAlwaysOpen={true} />
    </Preview>
  </>;
}
