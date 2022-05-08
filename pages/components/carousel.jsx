import Harbor from "../../src/components/organisms/Harbor";
import ResultCodePreview from "../../src/components/templates/components/carousel/ResultCodePreview";
import ResultPreview from "../../src/components/templates/components/carousel/ResultPreview";

export default function Carousel() {
  return <>
    <Harbor title="Carousel">
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  </>;
}

