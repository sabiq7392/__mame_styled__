import CodePreview from '../../organisms/CodePreview';
import Preview from '../../organisms/Preview';
import Harbor from '../../organisms/Harbor';
import { Typography } from '../../../../styles/MameStyled/core/Typography.styled';
import { Br } from '../../../../styles/MameStyled/core/HtmlTag.styled';

export default function LineHeight() {
  return (
    <Harbor title="Line Height" description="specifies the height of a line">
      <Preview member="Line Height" description="Value of 'lineHeight' is same like 'line-height' in css">
        <Typography lineHeight="175%">
            This a styled component that makes it easy to develop user interfaces, 
            where you can write internal css in inline css style. hopefully if you use this you can 
            easily create components without having to create css files again
        </Typography>

        <Br />

        <Typography lineHeight={3}>
          This a styled component that makes it easy to develop user interfaces, 
            where you can write internal css in inline css style. hopefully if you use this you can 
            easily create components without having to create css files again
        </Typography>
      </Preview>
      <CodePreview member="Line Height">
        {`
          <Typography lineHeight="175%">
            This a styled component that makes it easy to develop user interfaces, 
            where you can write internal css in inline css style. hopefully if you use this you can 
            easily create components without having to create css files again
          </Typography>

          <Br />

          <Typography lineHeight={1}>
            This a styled component that makes it easy to develop user interfaces, 
            where you can write internal css in inline css style. hopefully if you use this you can 
            easily create components without having to create css files again
          </Typography>
        `}
      </CodePreview>
    </Harbor>
  );
}
