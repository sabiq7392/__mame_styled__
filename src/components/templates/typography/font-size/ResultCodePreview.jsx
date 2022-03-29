import catchErrorPropsComponent from '../../../../utils/catchErrorPropsComponent';
import CodePreview from '../../../organisms/CodePreview';

export default function ResultCodePreview({ ...props }) {
  catchErrorPropsComponent({ props, component: 'ResultCodePreview of Typography - Font Size' });

  return (
    <CodePreview title="Result Code Preview" member="Font Size">
      {`
        <Typography size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}>
          Developer Try Me
        </Typography>
      `}
    </CodePreview>
  );
}
