import ItemExample from '../../../molecules/ItemExample';
import nextJsExample from '../../../../data/nextJsExample';
import stylesConfig from '../../../../../styles.config';
import { Grid } from '../../../../../styles/MameStyled/core/display/Grid.styled';
import Preview from '../../../organisms/Preview';

export default function ResultPreview() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Preview title="No Media Screen" member="Grid Template Columns"  >
        <Grid container cols={4} gap={spacing.sm} css={{ overflowX: 'auto' }}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Preview>

      <Preview title="With Media Screen" member="Grid Template Columns" 
        appeal="Try to resize the screen and see the effect!"
      >
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Preview>
    </>
  );
}
