import ResultCodePreview from '../src/components/templates/html-tag/ResultCodePreview';
import ResultPreview from '../src/components/templates/html-tag/ResultPreview';
import Harbor from '../src/components/organisms/Harbor';
export default function HtmlTag() {
  return (
    <Harbor title="HTML Tag" appeal="The HTML tag is superset!"
      description="
        you can easily use media screen , hover, internal css with inline 
        style. Provided you have to call the superset html 
        tag starting with uppercase
      "
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  );
}
