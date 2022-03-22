import { Article, H3, Section, P, Header, H4 } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import Heading from '../_partials/Heading';
import ItemExample from '../_partials/ItemExample';
import CodePreview from '../_partials/CodePreview';
import nextJsExample from '../../data/nextJsExample';
import stylesConfig from '../../../styles.config';
import Appeal from '../_partials/Appeal';
import Container from '../_partials/Container';

export default function GridTemplateColumns() {
  const { spacing } = stylesConfig;

  return (
    <Article>
      <Grid gap={spacing.md}> 
        <Heading as={H3} title="Grid Template Columns" />
        <Grid gap={spacing.lg}>
          <ResultPreview />
          <ResultCodePreview />
        </Grid>
      </Grid>
    </Article>
  );
}

function ResultPreview() {
  const { spacing } = stylesConfig;

  return (
    <>
      <Container as="section" standard >
        <Heading as={H4} member="Grid Template Columns" title="No Media Screen" />
        <Grid container cols={4} gap={spacing.sm} css={{ overflowX: 'auto' }}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Container>

      <Container as="section" standard>
        <Header css={{ display: 'grid', gap: spacing.xs }}>
          <Heading as={H4} member="Grid Template Columns" title="With Media Screen" />
          <Appeal as="p" text="Try to resize the screen, and see the effect!" />
        </Header>
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Container>
    </>
  );
}

function ResultCodePreview({  }) {
  return (
    <CodePreview heading={H4} title="Result Code Preview" member="Grid Template Columns">
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
  )
}