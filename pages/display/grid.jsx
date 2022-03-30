import Properties from '../../src/components/templates/display-grid/Properties';
import GridTemplateColumns from '../../src/components/templates/display-grid/GridTemplateColumns';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../styles.config';
import Harbor from '../../src/components/organisms/Harbor';

export default function DisplayGrid() {
  const { spacing } = stylesConfig;

  return (
    <Harbor title="Display Grid" appeal="The default tag of Grid is '<div>'">
      <Grid gap={spacing.lg}>
        <GridTemplateColumns />
        <Properties />
      </Grid>
    </Harbor>
  );
}
