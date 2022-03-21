import { P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';

export default function Description({ textAlign, margin, color, text, size, }) {
  const { font } = stylesConfig;

  const css = { 
    textAlign: textAlign, 
    margin: margin ?? 'auto', 
    lineHeight: font.lineHeight, 
    color: color ?? stylesConfig.color.light
  };

  return (
    <P css={css} size={size}>{text}</P>
  );
}

const { string, oneOf, oneOfType, number, object } = PropTypes;

Description.propTypes = {
  text: string.isRequired,
  textAlign: oneOf(['center', 'left', 'right']),
  margin: oneOfType([string, number]),
  color: string,
  size: oneOfType([string, number, object])
};
