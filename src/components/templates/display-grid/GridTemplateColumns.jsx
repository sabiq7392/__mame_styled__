import Harbor from '../../organisms/Harbor';
import Preview from '../../organisms/Preview';
import nextJsExample from '../../../data/nextJsExample';
import ItemExample from '../../molecules/ItemExample';
import { Grid } from '../../../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../../../styles.config';
import CodePreview from '../../organisms/CodePreview';

export default function GridTemplateColumns() {
  const { spacing } = stylesConfig;

  return (
    <Harbor title="Grid Template Columns">
      <Preview title="Result Preview - No Media Screen" member="Grid Template Columns" noLandfield>
        <Grid container cols={4} gap={spacing.sm} css={{ overflowX: 'auto' }}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Preview>
      <Preview title="Result Preview - With Media Screen" member="Grid Template Columns" noLandfield
        appeal="Try to resize the screen and see the effect!"
      >
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
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




