import { Typography } from "../../../../styles/MameStyled/core/_deprecated/Typography.styled";
import CodePreview from "../../organisms/CodePreview";
import Harbor from "../../organisms/Harbor";
import Preview from "../../organisms/Preview";

export default function FontVariant() {
  return (
    <Harbor title="Font Variant">
      <Preview member="Font Variant" description="Value of 'fontVariant' is same like 'font-variant' in css">
        <Typography fontVariant="normal">Sabiq Muhammad</Typography>
        <Typography fontVariant="small-caps">Sabiq Muhammad</Typography>
      </Preview>
      <CodePreview member="Font Variant">
        {`
          <Typography fontVariant="normal">Sabiq Muhammad</Typography>
          <Typography fontVariant="small-caps">Sabiq Muhammad</Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
