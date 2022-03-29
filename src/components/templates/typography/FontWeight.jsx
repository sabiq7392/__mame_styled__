import { H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';
import Harbor from '../../organisms/Harbor';
import ResultCodePreview from './font-weight/ResultCodePreview';

export default function FontWeight({ ...props }) {
  catchErrorPropsComponent({ props, component: 'FontWeight of Typography' });

  return (
    <Harbor head={H3} title="Font Weight" description="sets how thick or thin characters in text should be displayed">
      <ResultCodePreview />
    </Harbor>
  );
}
