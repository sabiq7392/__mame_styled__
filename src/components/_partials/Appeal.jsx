import { P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';

export default function Appeal({ text, css }) {
  const { color } = stylesConfig;
  const cssDefault = { 
    color: color.light, 
    fontSize: 12,
    fontWeight: 600,
  }

  return (
    <P css={css ?? cssDefault}>{text}</P>
  );
}

Appeal.propTypes = {
  text: PropTypes.string,
  css: PropTypes.object,
};

