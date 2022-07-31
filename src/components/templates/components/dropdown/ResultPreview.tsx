import { ReactElement } from "react";
import Preview from "../../../organisms/Preview";
import MameDropdown from "./_MameDropdown";

export default function ResultPreview(): ReactElement {
  return <>
    <Preview member="Dropdown" noLandfield>
      <MameDropdown />
    </Preview>
  </>;
}
