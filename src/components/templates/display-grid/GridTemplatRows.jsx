import stylesConfig from "../../../../styles.config";
import { Grid } from "../../../../styles/MameStyled/core/display/Grid";
import nextJsExample from "../../../data/nextJsExample";
import ItemExample from "../../molecules/ItemExample";
import CodePreview from "../../organisms/CodePreview";
import Harbor from "../../organisms/Harbor";
import Preview from "../../organisms/Preview";

export default function GridTemplateRows() {
  const { spacing } = stylesConfig;

  return (
    <Harbor title="Grid Template Rows"> 
      <Preview title="Result Preview - No Media Screen" member="Grid Template Rows" noLandfield>
        <Grid container rows={"150px 200px 150px 200px"} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }) =>
            <ItemExample key={title} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Preview>
      <Preview title="Result Preview - With Media Screen" member="Grid Template Rows" appeal="Try to resize the screen and see the effect!" noLandfield>
        <Grid container rows={{ xs: "auto", lg: "150px 200px 150px 200px" }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }) =>
            <ItemExample key={title} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Preview>
      <CodePreview member="Grid Template Rows">
        {`
          // no Media Screen
          <Grid container rows="150px 200px 150px 200px">
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
          </Grid>

          // With Media Screen
          <Grid container rows={{ xs: "auto", lg: "150px 200px 150px 200px" }}>
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
          </Grid>
        `}
      </CodePreview>
    </Harbor>
  );
}
