import catchErrorPropsComponent from '../../../../utils/catchErrorPropsComponent';
import CodePreview from '../../../organisms/CodePreview';

export default function ResultCodePreview({ ...props }) {
  catchErrorPropsComponent({ props, component: 'ResultCodePreview of Typography - Font Weigh' });

  return (
    <CodePreview title="Result Code Preview" member="Font Weight">
      {`
        
      `}
    </CodePreview>
  );
}
