import Harbor from "../../src/components/organisms/Harbor";
import ResultCodePreview from "../../src/components/templates/components/appbar/ResultCodePreview";
import ResultPreview from "../../src/components/templates/components/appbar/ResultPreview";

export default function Appbar() {
  return <>
    <Harbor
      title="Appbar"
      appeal=""
      description=""
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  </>
}
