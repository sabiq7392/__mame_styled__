// import Properties from "../../src/components/templates/display-grid/Properties";
// import GridTemplateColumns from "../../src/components/templates/display-grid/GridTemplateColumns";
import Harbor from "../../src/components/organisms/Harbor";
// import GridTemplateRows from "../../src/components/templates/display-grid/GridTemplatRows";
// import GridTemplateAreas from "../../src/components/templates/display-grid/GridTemplateAreas";

import dynamic from "next/dynamic";

const Properties = dynamic(() => import("../../src/components/templates/display-grid/Properties"));
const GridTemplateColumns = dynamic(() => import("../../src/components/templates/display-grid/GridTemplateColumns"));
const GridTemplateRows = dynamic(() => import("../../src/components/templates/display-grid/GridTemplatRows"));
const GridTemplateAreas = dynamic(() => import("../../src/components/templates/display-grid/GridTemplateAreas"));

export default function DisplayGrid() {
  return (
    <Harbor title="Display Grid" appeal="The default tag of Grid is '<div>'">
      <GridTemplateColumns />
      <GridTemplateRows />
      <GridTemplateAreas />
      <Properties />
    </Harbor>
  );
}
