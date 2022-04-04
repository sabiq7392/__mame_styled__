import nextJsExample from '../../../data/nextJsExample';
import ItemExample from '../../molecules/ItemExample';
import CodePreview from '../../organisms/CodePreview';
import Harbor from '../../organisms/Harbor';
import Preview from '../../organisms/Preview';

export default function GridTemplateAreas() {
  return (
    <Harbor title="Grid Template Areas">
      <Preview title="Result Preview - No Media Screen" member="Grid Template Rows">
        {nextJsExample.map(({ title, href, description }) => 
          <ItemExample key={title} title={title} href={href} description={description} />        
        )}
      </Preview>
      <CodePreview member="Grid Template Areas">
        {`
          
        `}
      </CodePreview>
    </Harbor>
  );
}
