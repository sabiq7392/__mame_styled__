import Heading from '../src/components/molecules/Heading';
import { H2 } from '../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../styles/MameStyled/core/display/Grid.styled';
import Attributes from '../src/components/templates/typography/Attributes';
import ResultPreview from '../src/components/templates/typography/ResultPreview';
import ResultCodePreview from '../src/components/templates/typography/ResultCodePreview';
import stylesConfig from '../styles.config';

export default function IsTypography() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Heading head={H2} title="Typography" />
      <Grid gap={spacing.lg}>
        <Attributes />
        <ResultPreview />
        <ResultCodePreview />
      </Grid>
    </>
  );
}
