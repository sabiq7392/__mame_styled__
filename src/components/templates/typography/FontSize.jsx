import { H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../../utils/catchErrorPropsComponent';
import Harbor from '../../organisms/Harbor';
import ResultCodePreview from './font-size/ResultCodePreview';
import ResultPreview from './font-size/ResultPreview';

export default function FontSize({ ...props }) {
  catchErrorPropsComponent({ props, component: 'FontSize of Typography' });

  return (
    <Harbor head={H3} title="Font Size" 
      description="xs, md, ... is size of screen. the font size will base on the screen"
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  );
}
