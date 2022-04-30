import nextJsExample from '../../../data/nextJsExample';
import ItemExample from '../../molecules/ItemExample';
import CodePreview from '../../organisms/CodePreview';
import Harbor from '../../organisms/Harbor';
import Preview from '../../organisms/Preview';
import { Grid } from '../../../../styles/MameStyled/core/display/Grid.styled';
import stylesConfig from '../../../../styles.config';

const { spacing } = stylesConfig;

export default function GridTemplateAreas() {
  return (
    <Harbor title="Grid Template Areas">
      <Preview title="Result Preview - No Media Screen" member="Grid Template Rows">
        <Grid container gap={spacing.sm}>
          {nextJsExample.map(({ title, href, description }) => 
            <ItemExample item="grid" key={title} title={title} href={href} description={description} />        
          )}
        </Grid>
      </Preview>
      <CodePreview member="Grid Template Areas">
        {`
          
        `}
      </CodePreview>
    </Harbor>
  );
}
