import dynamic from "next/dynamic";

const Harbor = dynamic(() => import("../../src/components/organisms/Harbor"));
const ResultCodePreview = dynamic(() => import("../../src/components/templates/components/navbar/ResultCodePreview"));
const ResultPreview = dynamic(() => import("../../src/components/templates/components/navbar/ResultPreview"));

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
  </>;
}

