import ResultCodePreview from "../src/components/templates/html-tag/ResultCodePreview";
import ResultPreview from "../src/components/templates/html-tag/ResultPreview";
import Harbor from "../src/components/organisms/Harbor";
import { NextPage } from "next";
import { ReactElement } from "react";

const HtmlTag: NextPage = (): ReactElement => {
  return (
    <Harbor title="HTML Tag" appeal="The HTML tag is superset!"
      description="
        you can easily use media screen , pseudo, internal css with inline 
        style. Provided you have to call the superset html 
        tag starting with uppercase
      "
    >
      <ResultPreview />
      <ResultCodePreview />
    </Harbor>
  );
};

export default HtmlTag;
