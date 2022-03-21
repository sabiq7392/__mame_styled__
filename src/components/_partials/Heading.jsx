import React from 'react';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';

export default function Heading({ as = 'h1', member, title, size, weight, ...props }) {
  const { color, spacing } = stylesConfig;

  const styleMember = { 
    color: color.light, 
    fontSize: 10, 
    marginRight: spacing.xs, 
    fontWeight: 'normal',
  };

  return React.createElement(
    as || 'h1', 
    { style: { color: color.white, fontSize: size, fontWeight: weight }, ...props }, 
    member ? [React.createElement('span', { style: styleMember, key: 1 }, member), title] : title,
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  member: PropTypes.string,
  title: PropTypes.string.isRequired,
};