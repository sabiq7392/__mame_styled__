import { Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';

export default function Author() {
  const { color } = stylesConfig;
  const css = { 
    display: 'grid', 
    alignItems: 'center', 
    color: color.light, 
    fontSize: 10,  
  };

  return (
    <Small css={css}>Author: Sabiq Muhammad Antebing Mame</Small>
  );
}