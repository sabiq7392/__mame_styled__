import { P } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Appeal({ text, css, as, ...props }) {
  catchErrorPropsComponent({ props, component: 'Appeal.jsx', location: '/src/components/_partials/Appeal.jsx' });

  const { color } = stylesConfig;

  const cssDefault = { 
    color: color.warning, 
    fontSize: 12,
    fontWeight: 600,
  };

  return (
    <P as={as} css={css ?? cssDefault}>{text}</P>
  );
}

const { string, object, oneOf } = PropTypes;

Appeal.propTypes = {
  text: string.isRequired,
  css: object,
  as: oneOf(['small', 'p']).isRequired,
};

