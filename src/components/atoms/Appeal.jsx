import { Strong } from '../../../styles/MameStyled/core/HtmlTag.styled';
import stylesConfig from '../../../styles.config';
import PropTypes from 'prop-types';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Appeal({ text, css, ...props }) {
  catchErrorPropsComponent({ props, component: 'Appeal.jsx' });

  const { color } = stylesConfig;

  const cssDefault = { 
    color: color.warning, 
    fontSize: 12,
    fontWeight: 600,
  };

  return (
    <Strong css={css ?? cssDefault}>{text}</Strong>
  );
}

const { string, object } = PropTypes;

Appeal.propTypes = {
  text: string.isRequired,
  css: object,
};

