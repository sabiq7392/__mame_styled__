import Heading from '../../src/components/molecules/Heading';
import Properties from '../../src/components/templates/display-grid/Properties';
import GridTemplateColumns from '../../src/components/templates/display-grid/GridTemplateColumns';
import { H2 } from '../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../styles.config';

export default function DisplayGrid() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Heading head={H2} title="Display Grid" />
      <Grid gap={spacing.lg}>
        <GridTemplateColumns />
        <Properties />
      </Grid>
    </>
  );
}
