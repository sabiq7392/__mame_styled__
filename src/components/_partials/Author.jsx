import { Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Author({ ...props }) {
  catchErrorPropsComponent({ props, component: 'Author.jsx', location: '/src/components/_partials/Author.jsx' });

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