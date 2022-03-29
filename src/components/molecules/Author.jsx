import { Small } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';
import { string } from 'prop-types';

export default function Author({ name, ...props }) {
  catchErrorPropsComponent({ props, component: 'Author.jsx' });

  const { color } = stylesConfig;

  const css = { 
    display: 'grid', 
    alignItems: 'center', 
    color: color.light, 
    fontSize: 10,  
  };

  return (
    <Small css={css}>Author: {name || 'Sabiq Muhammad Antebing Mame'}</Small>
  );
}

Author.propTypes = {
  name: string,
};
