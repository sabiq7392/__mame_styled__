import { Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';

export default function Brand() {
  const { color } = stylesConfig;
  const css = { 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: color.primary, 
    letterSpacing: 1 
  };

  return (
    <Small css={css}>Mame Styled</Small>
  );
}