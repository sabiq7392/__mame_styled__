import stylesConfig from '../../../styles.config';
import { Article } from '../../../styles/MameStyled/core/HtmlTag.styled';

export default function Container({ children }) {
  const { color, spacing, radius } = stylesConfig;

  return (
    <Article css={{ 
      display: 'grid', 
      gap: spacing.md,
      width: '100%', 
      padding: spacing.md, 
      borderRadius: radius.md, 
      border: `1px solid ${color.muted}` 
    }}>
      {children}
    </Article>
  );
}