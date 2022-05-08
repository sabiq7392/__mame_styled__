import Harbor from "../../src/components/organisms/Harbor";
import ResultCodePreview from "../../src/components/templates/components/dropdown/ResultCodePreview";
import ResultPreview from "../../src/components/templates/components/dropdown/ResultPreview";

export default function Dropdown() {
  return <>
    <Harbor title="Dropdown">
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  </>;
}
