import React from 'react';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';
import { Div, H1, H2, H3, H4, H5, H6, Span } from '../../../styles/MameStyled/core/HtmlTag.styled';
import ReactDOM from 'react-dom';
import { Grid } from '../../../styles/MameStyled/core/display/Grid.styled';
import catchErrorComponent from '../../utils/CatchErrorComponent';

export default function Heading({ as, member, title, size, weight, ...props }) {
  catchErrorComponent({ props, component: 'Heading' });
  
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

const { oneOf, string } = PropTypes;

Heading.propTypes = {
  as: oneOf([H1, H2, H3, H4, H5, H6]),
  member: string,
  title: string.isRequired,
};
