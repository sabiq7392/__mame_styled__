import { Typography } from '../../../../styles/MameStyled/core/Typography.styled';
import CodePreview from '../../organisms/CodePreview';
import Harbor from '../../organisms/Harbor';
import Preview from '../../organisms/Preview';
import { valueLikeCss } from '../../../utils/constant/text';

export default function Color() {
  return (
    <Harbor title="Color" description="Set color of font">
      <Preview member="Color" description={valueLikeCss('Color', 'color')}>
        <Typography color="white">Sabiq Muhammad</Typography>
        <Typography color="rgba(255, 255, 255, 1)">Sabiq Muhammad</Typography>
        <Typography color="#fff">Sabiq Muhammad</Typography>
      </Preview>
      <CodePreview member="Color"> 
        {`
          <Typography color="white">Sabiq Muhammad</Typography>
          <Typography color="rgba(255, 255, 255, 1)">Sabiq Muhammad</Typography>
          <Typography color="#fff">Sabiq Muhammad</Typography>
        `}
      </CodePreview>
    </Harbor>
  )
}
