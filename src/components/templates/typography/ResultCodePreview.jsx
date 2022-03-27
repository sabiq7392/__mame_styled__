import CodePreview from '../../organisms/CodePreview';
import { H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';

export default function ResultCodePreview() {
  return (
    <CodePreview head={H3} title="Result Code Preview" member="Typography">
      {`
        <Typography 
          weight="bold" 
          color="black" 
          size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}
        >
          Example
        </Typography>
      `}
    </CodePreview>
  );
}
