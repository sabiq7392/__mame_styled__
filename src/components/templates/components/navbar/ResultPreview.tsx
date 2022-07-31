// import dynamic from "next/dynamic";

// const MameNavbar = dynamic(() => import("./_MameNavbar"));
import { ReactElement } from "react";
import Preview from "../../../organisms/Preview";
import MameNavbar from "./_MameNavbar";

export default function ResultPreview(): ReactElement {
  return <>
    <Preview member="Navbar" noLandfield>
      <MameNavbar />
    </Preview>
  </>;
}
