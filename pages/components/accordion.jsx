import dynamic from "next/dynamic";

const Harbor = dynamic(() => import("../../src/components/organisms/Harbor"));
const ResultPreview = dynamic(() => import("../../src/components/templates/components/accordion/ResultPreview"));
const ResultCodePreview = dynamic(() => import("../../src/components/templates/components/accordion/ResultCodePreview"));

export default function Accordion() {
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
}

