import { Div, Header, Table, TBody, Td, Th, THead } from '../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../styles/MameStyled/core/display/_Display.styled';
import { Typography } from '../../styles/MameStyled/core/Typography.styled';
import CodePreview from './_partials/CodePreview';
import Container from './_partials/Container';
import Heading from './_partials/Heading';
import stylesConfig from '../../styles.config';
import Appeal from './_partials/Appeal';

export default function IsTypography() {
  const { spacing } = stylesConfig;

  return (
    <Container as="article">
      <Heading as="h2" title="Typography" />
      <Grid gap={spacing.lg}>
        <Attributes />
        <ResultPreview />
        <ResultCodePreview />
      </Grid>
    </Container>
  );
}

function Attributes() {
  const { spacing, color, radius } = stylesConfig;

  return (
    <>
      <Container as="section" standard gap={spacing.sm}>
        <Heading as="h3" title="Attributes" member="Typography" />
        <Table>
          <THead css={{ backgroundColor: color.light, borderRadius: radius.sm }}>
            <Th css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px` }}>Name</Th>
            <Th css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px` }}>Value</Th>
            <Th css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px` }}>Type</Th>
            <Th css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px` }}>Description</Th>
          </THead>
          <TBody css={{ backgroundColor: color.base.secondary.default }}>
            <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>size</Td>
            <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
              {`size={{number}}`} 
              <br />
              {`size={{ xs: {number}, sm:..., md:..., lg:..., xl:..., xxl:... }}`}
            </Td>
            <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
              number || number{`{}`}
            </Td>
            <Td css={{ textAlign: 'left', padding: `${spacing.xs}px ${spacing.sm}px`, color: color.white, verticalAlign: 'top' }}>
              xs, md, ... is size of screen. 
              <br />
              the font size will be added based on the screen
            </Td>
          </TBody>
        </Table>
      </Container>
    </>
  );
}

function ResultPreview() {
  const { color, radius, spacing } = stylesConfig;

  return (
    <>
      <Container as="section" standard gap={spacing.sm}>
        <Header css={{ display: 'grid', gap: spacing.xs }}>
          <Heading as="h3" title="Result Preview" member="Typography" />
          <Appeal as="p" text="Try to resize the screen, and see the effect!" />
        </Header>
        <Div css={{ backgroundColor: color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
          <Typography 
            weight="bold" 
            color={color.white}
            size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}
          >
            Developer, Try Me!!
          </Typography>
        </Div>
      </Container>
    </>
  );
}

function ResultCodePreview() {
  return (
    <CodePreview heading="h3" title="Result Code Preview" member="Typography">
      {`
        <Typography 
          weight="bold" 
          color="black" 
          size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}
        >
          Example
        </Typography>
      `}
    </CodePreview>
  );
}
