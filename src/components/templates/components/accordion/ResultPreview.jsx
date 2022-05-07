import Preview from "../../../organisms/Preview";
import MameAccordion from "./_MameAccordion";

export default function ResultPreview() {
  return <>
    <Preview member="Accordion" noLandfield>
      <MameAccordion isAlwaysOpen={true} />
      <MameAccordion isAlwaysOpen={false} />
    </Preview>
  </>;
}
