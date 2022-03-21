import { Article, H3, Section, P, Header } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import { ItemExample, Heading } from '../_partials/_partials';
import CodePreview from '../_partials/CodePreview';
import nextJsExample from '../../data/nextJsExample';
import stylesConfig from '../../../styles.config';
import Appeal from '../_partials/Appeal';

export default function GridTemplateColumns() {
  const { spacing, color } = stylesConfig;

  return (
    <Article>
      <Grid gap={spacing.md}> 
        <H3 css={{ color: color.white }}>Grid Template Columns</H3>
        <Grid gap={30}>
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
      <Section css={{ display: 'grid', gap: spacing.sm }}>
        <Heading as="h4" member="Grid Template Columns" title="No Media Screen"  />
        <Grid container cols={4} gap={spacing.sm} css={{ overflowX: 'auto' }}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Section>

      <Section css={{ display: 'grid', gap: spacing.sm, }}>
        <Header css={{ display: 'grid', gap: spacing.xs }}>
          <Heading as="h4" member="Grid Template Columns" title="With Media Screen"  />
          <Appeal text="Try to resize the screen, and see the effect!" />
        </Header>
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample key={_key} item="grid" title={title} href={href} description={description} />
          )}
        </Grid>
      </Section>
    </>
  );
}

function ResultCodePreview({  }) {
  return (
    <CodePreview heading="h4" title="Result Code Preview" member="Grid Template Columns">
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