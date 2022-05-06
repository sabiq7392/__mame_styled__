import dynamic from "next/dynamic";
import { memo } from "react";

const Harbor = dynamic(() => import("../../src/components/organisms/Harbor"));
const ResultCodePreview = dynamic(() => import("../../src/components/templates/components/navbar/ResultCodePreview"));
const ResultPreview = dynamic(() => import("../../src/components/templates/components/navbar/ResultPreview"));

const Appbar = memo(function Appbar() {
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
});

export default Appbar;
