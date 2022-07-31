import Harbor from "../../src/components/organisms/Harbor";
import Preview from "../../src/components/organisms/Preview";
import { Grid } from "../../styles/MameStyled/core/display/Grid";
import CodePreview from "../../src/components/organisms/CodePreview";
import ItemExample from "../../src/components/molecules/ItemExample";
import STYLES_CONFIG from "../../styles.config";
import nextJsExample from "../../src/data/nextJsExample";
import type { ReactElement } from "react";
import { NextPage } from "next";

const { spacing } = STYLES_CONFIG;

const DisplayGrid: NextPage = (): ReactElement => {
  return (
    <Harbor title="Display Grid" appeal="The default tag of Grid is '<div>'">
      <GridTemplateColumns />
      <GridTemplateRows />
      <GridTemplateAreas />
      <Properties />
    </Harbor>
  );
};
export default DisplayGrid;

function GridTemplateAreas(): ReactElement {
  return (
    <Harbor title="Grid Template Areas">
      <Preview title="Result Preview - No Media Screen" member="Grid Template Rows" noLandfield>
        <Grid container gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }) => 
            <ItemExample 
              item="grid" 
              key={title} 
              title={title} 
              href={href} 
              description={description} 
            />        
          )}
        </Grid>
      </Preview>
      <CodePreview member="Grid Template Areas">
        {`
          <Preview title="Result Preview - No Media Screen" member="Grid Template Rows" noLandfield>
            <Grid container gap={spacing.sm}>
              {nextJsExample.map(({ title, href, description }) => 
                <ItemExample 
                  item="grid" 
                  key={title} 
                  title={title} 
                  href={href} 
                  description={description} 
                />        
              )}
            </Grid>
          </Preview>
        `}
      </CodePreview>
    </Harbor>
  );
}

function GridTemplateColumns(): ReactElement {
  const { spacing } = STYLES_CONFIG;

  return (
    <Harbor title="Grid Template Columns">
      <Preview title="Result Preview - No Media Screen" member="Grid Template Columns" noLandfield>
        <Grid container cols={4} gap={spacing.sm} cssXs={{ overflowX: "auto" }}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample 
              key={_key} 
              item="grid" 
              title={title} 
              href={href} 
              description={description} 
            />
          )}
        </Grid>
      </Preview>
      <Preview title="Result Preview - With Media Screen" member="Grid Template Columns" noLandfield
        appeal="Try to resize the screen and see the effect!"
      >
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample 
              key={_key} 
              item="grid" 
              title={title} 
              href={href} 
              description={description} 
            />
          )}
        </Grid>
      </Preview>

      <CodePreview title="Result Code Preview" member="Grid Template Columns">
        {`
          // no Media Screen
          <Grid container cols={4}>
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
          </Grid>

          // With Media Screen
          <Grid container cols={{ xs: 1, md: 2, lg: 4 }}>
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

function GridTemplateRows(): ReactElement {
  const { spacing } = STYLES_CONFIG;

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

function Properties(): ReactElement {
  return (
    <Harbor title="Properties">
      <></>
    </Harbor>
  );
}




