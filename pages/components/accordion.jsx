import Harbor from "../../src/components/organisms/Harbor";
import ResultPreview from "../../src/components/templates/components/accordion/ResultPreview"
import ResultCodePreview from "../../src/components/templates/components/accordion/ResultCodePreview";

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
