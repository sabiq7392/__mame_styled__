import catchErrorPropsComponent from '../../../../utils/catchErrorPropsComponent';

export default function ResultPreview({ ...props }) {
  catchErrorPropsComponent({ props, component: 'ResultPreview of Typography - Font Weight' });
}
