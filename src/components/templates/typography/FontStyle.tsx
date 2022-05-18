import { Br } from "../../../../styles/MameStyled/core/HtmlTag.ts";
import { Typography } from "../../../../styles/MameStyled/core/_deprecated/Typography.styled";
import CodePreview from "../../organisms/CodePreview";
import Harbor from "../../organisms/Harbor";
import Preview from "../../organisms/Preview";

export default function FontStyle() {
  return (
    <Harbor title="Font Style">
      <Preview member="Font Style" description="Value of 'fontStyle' is same like 'font-style' in css, when its without align it just simplified">
        <Typography fontStyle="normal">Sabiq Muhammad</Typography>
        <Typography fontStyle="italic">Sabiq Muhammad</Typography>
        <Typography fontStyle="oblique">Sabiq Muhammad</Typography>
        
        <Br />

        <Typography styleNormal>Sabiq Muhammad</Typography>
        <Typography italic>Sabiq Muhammad</Typography>
        <Typography oblique>Sabiq Muhammad</Typography>
      </Preview>
      <CodePreview member="Font Style">
        {`
          <Typography fontStyle="normal">Sabiq Muhammad</Typography>
          <Typography fontStyle="italic">Sabiq Muhammad</Typography>
          <Typography fontStyle="oblique">Sabiq Muhammad</Typography>
          
          <Br />

          <Typography styleNormal>Sabiq Muhammad</Typography>
          <Typography italic>Sabiq Muhammad</Typography>
          <Typography oblique>Sabiq Muhammad</Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
