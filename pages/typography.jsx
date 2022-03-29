import Heading from '../src/components/molecules/Heading';
import { H2 } from '../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../styles/MameStyled/core/display/Grid.styled';
import Properties from '../src/components/templates/typography/Properties';
import stylesConfig from '../styles.config';
import FontSize from '../src/components/templates/typography/FontSize';
import FontWeight from '../src/components/templates/typography/FontWeight';
import TextAlign from '../src/components/templates/typography/TextAlign';
import FontStyle from '../src/components/templates/typography/FontStyle';
import LineHeight from '../src/components/templates/typography/LineHeight';
import Color from '../src/components/templates/typography/Color';
import FontVariant from '../src/components/templates/typography/FontVariant';

export default function IsTypography() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Heading head={H2} title="Typography" 
        appeal="The default tag of Typography is '<p>', use prop as='h1' to change"
        description="
          Normally you can use all typography attributes in html tag text such 
          P, A, B, I, Small, Blockquote, Strong, H1...,
        "
      />
      <Grid gap={spacing.lg}>
        <Color />
        <FontSize />
        <FontStyle />
        <FontVariant />
        <FontWeight />
        <LineHeight />
        <TextAlign />
        <Properties />
      </Grid>
    </>
  );
}
