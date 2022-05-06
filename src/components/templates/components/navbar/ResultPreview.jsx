import Preview from "../../../organisms/Preview";
import dynamic from "next/dynamic";

const MameNavbar = dynamic(() => import("./_MameNavbar"));

export default function ResultPreview() {
  return <>
    <Preview member="Navbar" noLandfield>
      <MameNavbar />
    </Preview>
  </>;
}
