// import dynamic from "next/dynamic";

// const Preview = dynamic(() => import("../../../organisms/Preview"));
// const MameAccordion = dynamic(() => import("./_MameAccordion"));

import Preview from "../../../organisms/Preview";
import MameAccordion from "./_MameAccordion";

export default function ResultPreview() {
  return <>
    <Preview member="Accordion" noLandfield>
      <MameAccordion isAlwaysOpen={true} />
      <MameAccordion isAlwaysOpen={true} />
    </Preview>
  </>;
}
