import Heading from '../src/components/molecules/Heading';
import { H2 } from '../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../styles/MameStyled/core/display/Grid.styled';
import Properties from '../src/components/templates/typography/Properties';
import stylesConfig from '../styles.config';
import FontSize from '../src/components/templates/typography/FontSize';
import FontWeight from '../src/components/templates/typography/FontWeight';

export default function IsTypography() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Heading head={H2} title="Typography" />
      <Grid gap={spacing.lg}>
        <FontSize />
        <FontWeight />
        <Properties />
      </Grid>
    </>
  );
}
