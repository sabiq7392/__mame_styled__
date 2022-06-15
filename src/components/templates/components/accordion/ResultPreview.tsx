import type { ReactElement } from "react";
import Preview from "../../../organisms/Preview";
import MameAccordion from "./_MameAccordion";

export default function ResultPreview(): ReactElement {
  return <>
    <Preview member="Accordion" noLandfield>
      <MameAccordion isAlwaysOpen={true} />
      <MameAccordion isAlwaysOpen={false} />
    </Preview>
  </>;
}
