import React from 'react';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { H1, H2, H3, H4, H5, H6 } from '../../../styles/MameStyled/core/HtmlTag.styled';
import catchErrorPropsComponent from '../../utils/catchErrorPropsComponent';

export default function Heading({ as, member, title, size, weight, ...props }) {
  catchErrorPropsComponent({ props, component: 'Heading.jsx' });
  
  const { color, spacing } = stylesConfig;

  const styleMember = { 
    color: color.light, 
    fontSize: 10, 
    marginRight: spacing.xs, 
    fontWeight: 'normal',
  };

  return React.createElement(
    as || H1, 
    { css: { color: color.white, fontWeight: weight }, size }, 
    member ? [React.createElement('span', { style: styleMember, key: 1 }, member), title] : title,
  );
}

const { oneOf, string, any } = PropTypes;

Heading.propTypes = {
  as: oneOf([H1, H2, H3, H4, H5, H6]),
  member: string,
  title: string.isRequired,
  size: any,
  weight: any,
};
