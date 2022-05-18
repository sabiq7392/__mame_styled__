import Properties from "../src/components/templates/typography/Properties";
import FontSize from "../src/components/templates/typography/FontSize";
import FontWeight from "../src/components/templates/typography/FontWeight";
import TextAlign from "../src/components/templates/typography/TextAlign";
import FontStyle from "../src/components/templates/typography/FontStyle";
import LineHeight from "../src/components/templates/typography/LineHeight";
import Color from "../src/components/templates/typography/Color";
import FontVariant from "../src/components/templates/typography/FontVariant";
import Harbor from "../src/components/organisms/Harbor";

// const Properties = dynamic(() => import("../src/components/templates/typography/Properties"));
// const FontSize = dynamic(() => import("../src/components/templates/typography/FontSize"));
// const FontWeight = dynamic(() => import("../src/components/templates/typography/FontWeight"));
// const TextAlign = dynamic(() => import("../src/components/templates/typography/TextAlign"));
// const FontStyle = dynamic(() => import("../src/components/templates/typography/TextAlign"));
// const LineHeight = dynamic(() => import("../src/components/templates/typography/LineHeight"));
// const Color = dynamic(() => import("../src/components/templates/typography/Color"));
// const FontVariant = dynamic(() => import("../src/components/templates/typography/FontVariant"));

export default function IsTypography() {
  return (
    <Harbor 
      title="Typography" 
      appeal="The default tag of Typography is '<p>', use prop as='h1' to change"
      description="
        Normally you can use all typography attributes in html tag text such 
        P, A, B, I, Small, Blockquote, Strong, H1...,
      "
    >
      <Color />
      <FontSize />
      <FontStyle />
      <FontVariant />
      <FontWeight />
      <LineHeight />
      <TextAlign />
      <Properties />
    </Harbor>
  );
}
