import { Article, H3, Header, H4 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import { Grid } from '../../../../styles/MameStyled/core/display/Grid.styled';
import Heading from '../../molecules/Heading';
import CodePreview from '../../organisms/CodePreview';
import stylesConfig from '../../../../styles.config';
import ResultPreview from './grid-template-columns/ResultPreview';
import ResultCodePreview from './grid-template-columns/ResultCodePreview';

export default function GridTemplateColumns() {
  const { spacing } = stylesConfig;

  return (
    <Article>
      <Grid gap={spacing.md}> 
        <Heading head={H3} title="Grid Template Columns" />
        <Grid gap={spacing.lg}>
          <ResultPreview />
          <ResultCodePreview />
        </Grid>
      </Grid>
    </Article>
  );
}




