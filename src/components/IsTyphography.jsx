import { Section } from '../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../styles/MameStyled/core/display/_Display.styled';
import { Typography } from '../../styles/MameStyled/core/Typography.styled';
import CodePreview from "./_partials/CodePreview";
import Container from "./_partials/Container";

export default function IsTypography() {
  return (
    <Container>
      <h2>Typography</h2>
      <Grid gap={30}>
        <Attributes />
        <ResultPreview />
        <ResultCodePreview />
      </Grid>
    </Container>
  );
}

function Attributes() {
  return (
    <></>
  );
}

function ResultPreview() {
  return (
    <>
      <Section>
        <Typography 
          weight="bold" 
          color="black" 
          size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}
        >
          Example
        </Typography>
      </Section>
    </>
  );
}

function ResultCodePreview() {
  return (
    <CodePreview>
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
