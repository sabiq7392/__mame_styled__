import dynamic from "next/dynamic";
import { memo } from "react";

const Harbor = dynamic(() => import("../../src/components/organisms/Harbor"));
const ResultPreview = dynamic(() => import("../../src/components/templates/components/accordion/ResultPreview"));
const ResultCodePreview = dynamic(() => import("../../src/components/templates/components/accordion/ResultCodePreview"));

const Accordion = memo(function Accordion() {
  return <>
    <Harbor 
      title="Accordion"
      appeal=""
      description=""
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  </>;
});

export default Accordion;
