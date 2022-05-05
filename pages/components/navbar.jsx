import Harbor from "../../src/components/organisms/Harbor";
import ResultCodePreview from "../../src/components/templates/components/navbar/ResultCodePreview";
import ResultPreview from "../../src/components/templates/components/navbar/ResultPreview";

export default function Appbar() {
  return <>
    <Harbor
      title="Navbar"
      appeal=""
      description=""
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  </>
}
