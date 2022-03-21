import { Article, Section } from '../../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import { ItemExample, Heading } from '../_partials/_partials';
import CodePreview from '../_partials/CodePreview';
import nextJsExample from '../../data/nextJsExample';

export default function GridTemplateColumns() {
  return (
    <Article>
      <h3>Grid Template Columns</h3>
      <Grid gap={30}>
        <ResultPreview />
        <ResultCodePreview />
      </Grid>
    </Article>
  );
}

function ResultPreview() {
  return (
    <>
      <Section>
        <Heading as="h4" member="Grid Template Columns" title="No Media Screen"  />
        <Grid container cols={4} gap={15}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample 
              key={_key}
              item="grid"
              title={title} 
              href={href} 
              description={description}
            />
          )}
        </Grid>
      </Section>

      <Section>
        <Heading as="h4" member="Grid Template Columns" title="With Media Screen"  />
        <Grid container cols={{ xs: 1, md: 2, lg: 4 }} gap={15}>
          {nextJsExample.map(({ title, href, description }, _key) => 
            <ItemExample 
              key={_key}
              item="grid"
              title={title} 
              href={href} 
              description={description}
            />
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