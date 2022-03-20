import { Article, Section, Grid, Div,  } from "../../../styles/MameStyled/Mame.styled";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ItemExample, Heading } from '../_partials/_partials';

export default function GridTemplateColumns() {
  return (
    <Article>
      <h3>Grid Template Columns</h3>
      <ResultPreview />
      <CodePreview />
    </Article>
  );
}

function ResultPreview() {
  return (
    <>
      <Section>
        <Heading as="h4" member="Grid Template Columns" title="No Media Screen"  />
        <Grid 
          container
          cols={4}
          gap={15}
        >
          <ItemExample 
            item="grid"
            title="1 Documentation" 
            href="https://nextjs.org/docs" 
            description="Find in-depth information about Next.js features and API." 
          />
          <ItemExample 
            item="grid"
            title="2 Learn"
            href="https://nextjs.org/learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <ItemExample 
            item="grid"
            title="3 Examples"
            href="https://github.com/vercel/next.js/tree/canary/examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />
          <ItemExample 
            item="grid"
            title="4 Deploy"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </Grid>
      </Section>

      <Section>
        <Heading as="h4" member="Grid Template Columns" title="With Media Screen"  />
        <Grid 
          container
          cols={{ xs: 1, md: 2, lg: 4 }}
          gap={15}
        >
          <ItemExample 
            item="grid"
            title="1 Documentation" 
            href="https://nextjs.org/docs" 
            description="Find in-depth information about Next.js features and API." 
          />
          <ItemExample 
            item="grid"
            title="2 Learn"
            href="https://nextjs.org/learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <ItemExample 
            item="grid"
            title="3 Examples"
            href="https://github.com/vercel/next.js/tree/canary/examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />
          <ItemExample 
            item="grid"
            title="4 Deploy"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </Grid>
      </Section>
    </>
  );
}

function CodePreview() {
  return (
    <Section>
      <Heading as="h4" member="Grid Template Columns" title="Code Preview"  />
      <SyntaxHighlighter language="html" style={vscDarkPlus}>
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
      </SyntaxHighlighter>
    </Section>
  );
}
