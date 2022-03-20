import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ as = 'h1', member, title, ...props }) {    
  return React.createElement(
    as, 
    props, 
    [
      React.createElement('span', {style: { color: '#aaa', fontSize: 10, marginRight: 10, fontWeight: 400 }}, member),
      title
    ],
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  member: PropTypes.string,
  title: PropTypes.string,
};