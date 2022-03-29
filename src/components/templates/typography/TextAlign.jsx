import Harbor from '../../organisms/Harbor';
import Preview from '../../organisms/Preview';
import { Typography } from '../../../../styles/MameStyled/core/Typography.styled';
import { Br } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import CodePreview from '../../organisms/CodePreview';

export default function TextAlign() {
  return (
    <Harbor title="Text Align" description="specifies the horizontal alignment of text in an element.">
      <Preview member="Text Align" description="Value of 'align' is same like 'text-align' in css, when its without align it just simplified">
        <Typography align="center">Sabiq Muhammad</Typography>
        <Typography align="right">Sabiq Muhammad</Typography>
        <Typography align="left">Sabiq Muhammad</Typography>

        <Br />

        <Typography center>Sabiq Muhammad</Typography>
        <Typography right>Sabiq Muhammad</Typography>
        <Typography left>Sabiq Muhammad</Typography>
      </Preview>
      <CodePreview member="Text Align">
        {`
          <Typography align="center">Sabiq Muhammad</Typography>
          <Typography align="right">Sabiq Muhammad</Typography>
          <Typography align="left">Sabiq Muhammad</Typography>

          <Br />

          <Typography center>Sabiq Muhammad</Typography>
          <Typography right>Sabiq Muhammad</Typography>
          <Typography left>Sabiq Muhammad</Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
