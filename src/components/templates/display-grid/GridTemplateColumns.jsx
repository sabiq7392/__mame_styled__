import { H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import ResultPreview from './grid-template-columns/ResultPreview';
import ResultCodePreview from './grid-template-columns/ResultCodePreview';
import Harbor from '../../organisms/Harbor';

export default function GridTemplateColumns() {
  return (
    <>
      <Harbor head={H3} title="Grid Template Columns">
        <ResultPreview />
        <ResultCodePreview />
      </Harbor>
    </>
  );
}




