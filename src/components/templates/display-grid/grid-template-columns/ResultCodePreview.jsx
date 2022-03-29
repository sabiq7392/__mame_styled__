import CodePreview from '../../../organisms/CodePreview';

export default function ResultCodePreview() {
  return (
    <CodePreview title="Result Code Preview" member="Grid Template Columns">
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
  );
}
