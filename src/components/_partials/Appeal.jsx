import { P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';

export default function Appeal({ text, css, as }) {
  const { color } = stylesConfig;
  const cssDefault = { 
    color: color.danger, 
    fontSize: 12,
    fontWeight: 600,
  }

  return (
    <P as={as} css={css ?? cssDefault}>{text}</P>
  );
}

Appeal.propTypes = {
  text: PropTypes.string.isRequired,
  css: PropTypes.object,
  as: PropTypes.oneOf(['small', 'p']).isRequired,
};

