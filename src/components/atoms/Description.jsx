import { P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';
import CatchErrorPropsComponent from '../../utils/CatchErrorPropsComponent';
import { node } from 'prop-types';

export default function Description({ textAlign, margin, color, text, size, ...props }) {
  CatchErrorPropsComponent({ props, component: 'Description.jsx' });

  const { font } = stylesConfig;

  const css = { 
    textAlign: textAlign, 
    margin: margin ?? 'auto', 
    lineHeight: font.lineHeight, 
    color: color ?? stylesConfig.color.light
  };

  return (
    <P cssXs={css} size={size}>{text}</P>
  );
}

const { string, oneOf, oneOfType, number, object } = PropTypes;

Description.propTypes = {
  text: oneOfType([string.isRequired, node.isRequired]),
  textAlign: oneOf(['center', 'left', 'right']),
  margin: oneOfType([string, number]),
  color: string,
  size: oneOfType([string, number, object]),
};
