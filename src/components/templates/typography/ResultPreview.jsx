import Container from '../../atoms/Container';
import { Div, H3 } from '../../../../styles/MameStyled/core/HtmlTag.styled';
import Heading from '../../molecules/Heading';
import { Typography } from '../../../../styles/MameStyled/core/Typography.styled';
import stylesConfig from '../../../../styles.config';

export default function ResultPreview() {
  const { color, radius, spacing } = stylesConfig;

  return (
    <div>
      <Container as="section" standard gap={spacing.sm}>
        <Heading 
          head={H3} 
          title="Result Preview" 
          member="Typography" 
          appeal="Try to resize the screen, and see the effect" 
        />
        <Div css={{ backgroundColor: color.base.secondary.default, borderRadius: radius.sm, padding: spacing.md }}>
          <Typography 
            weight="bold" 
            color={color.white}
            size={{ xs: 20, sm: 25, md: 30, lg: 35, xl: 40, xxl: 45 }}
          >
            Developer, Try Me!!
          </Typography>
        </Div>
      </Container>
    </div>
  );
}
