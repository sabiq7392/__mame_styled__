import React from 'react';
import PropTypes from 'prop-types';
import stylesConfig from '../../../styles.config';

export default function Heading({ as = 'h1', member, title, ...props }) {
  const { color, spacing } = stylesConfig;

  const style = { 
    color: color.light, 
    fontSize: 10, 
    marginRight: spacing.xs, 
    fontWeight: 'normal',
  };

  return React.createElement(
    as || 'h1', 
    { style: { color: color.white }, ...props }, 
    [React.createElement('span', { style, key: 1 }, member), title],
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  member: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};