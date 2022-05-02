import CatchErrorPropsComponent from "../../../../styles/MameStyled/core/components/handle-error/CatchErrorPropsComponent";
import Harbor from "../../organisms/Harbor";
import CodePreview from "../../organisms/CodePreview";
import Preview from "../../organisms/Preview";
import { Typography } from "../../../../styles/MameStyled/core/_deprecated/Typography.styled";
import { Br } from "../../../../styles/MameStyled/core/HtmlTag.styled";

export default function FontWeight({ ...props }) {
  CatchErrorPropsComponent({ props, component: "FontWeight of Typography" });

  return (
    <Harbor title="Font Weight" description="sets how thick or thin characters in text should be displayed">
      <Preview member="Font Weight" description="the value of 'weight' is same like 'font-weight' in css, when its without weight it just simplified" >
        <Typography weight="bolder">Sabiq Muhammad</Typography>
        <Typography weight="bold">Sabiq Muhammad</Typography>
        <Typography weight="semibold">Sabiq Muhammad</Typography>
        <Typography weight="normal">Sabiq Muhammad</Typography>
        <Typography weight="lighter">Sabiq Muhammad</Typography>

        <Br />

        <Typography bolder>Sabiq Muhammad</Typography>
        <Typography bold>Sabiq Muhammad</Typography>
        <Typography semibold>Sabiq Muhammad</Typography>
        <Typography normal>Sabiq Muhammad</Typography>
        <Typography lighter>Sabiq Muhammad</Typography>
      </Preview>

      <CodePreview member="Font Weight">
        {`
          <Typography weight="bolder">Sabiq Muhammad</Typography>
          <Typography weight="bold">Sabiq Muhammad</Typography>
          <Typography weight="semibold">Sabiq Muhammad</Typography>
          <Typography weight="normal">Sabiq Muhammad</Typography>
          <Typography weight="lighter">Sabiq Muhammad</Typography>

          <Br />

          <Typography bolder>Sabiq Muhammad</Typography>
          <Typography bold>Sabiq Muhammad</Typography>
          <Typography semibold>Sabiq Muhammad</Typography>
          <Typography normal>Sabiq Muhammad</Typography>
          <Typography lighter>Sabiq Muhammad</Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
