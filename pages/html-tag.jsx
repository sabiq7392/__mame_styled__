import { H2 } from '../styles/MameStyled/core/HtmlTag.styled';
// import Heading from '../src/components/_partials/Heading';
import Appeal from '../src/components/atoms/Appeal';
import Description from '../src/components/atoms/Description';
import stylesConfig from '../styles.config';
import ResultCodePreview from '../src/components/templates/html-tag/ResultCodePreview';
import ResultPreview from '../src/components/templates/html-tag/ResultPreview';
import Heading from '../src/components/molecules/Heading';
export default function HtmlTag() {
  return (
    <>
      <Heading 
        head={H2}
        title="HTML Tag"
        appeal="The HTML tag is superset!"
        description="
          you can easily use media screen , hover, internal css with inline 
          style. Provided you have to call the superset html 
          tag starting with uppercase
        "
      />
      <ResultPreview />
      <ResultCodePreview />
    </>
  );
}
