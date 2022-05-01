import styled from 'styled-components';
import screen from '../../config/screen.config';
import attributes from '../../utils/constants/attributes';
import { gap } from '../../utils/styling/responsive-property';

/**
 * Set Grid Template
 * @category Display
 * @param {*} props props
 * @param {'rows'|'cols'|'areas'} direction rows or cols
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'xxl'} size value of size screens
 * @returns {*}
 */
const setGridTemplate = (props, direction, size) => {
  if (props[direction]) {
    if (props[direction][size]) {
      return typeof props[direction][size] === 'number' ? `repeat(${props[direction][size]}, 1fr)` : props[direction][size];
    } else {
      return typeof props[direction] === 'number' ? `repeat(${props[direction]}, 1fr)` : props[direction];
    }
  }

  return false;
};

const defaultStyle = props => ({
  display: 'grid',
  placeItems: props.center ? 'center' : props.placeItems,
  alignItems: props.vCenter ? 'center' : props.alignItems,
  justifyContent: props.hCenter ? 'center' : props.justifyContent,
});

const containerStyle = props => ({
  [`@media (${screen.xs})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'xs'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'xs'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'xs'),
  },
  [`@media (${screen.sm})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'sm'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'sm'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'sm'),
  },
  [`@media (${screen.md})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'md'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'md'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'md'),
  },
  [`@media (${screen.lg})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'lg'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'lg'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'lg'),
  },
  [`@media (${screen.xl})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'xl'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'xl'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'xl'),
  },
  [`@media (${screen.xxl})`]: { 
    gridTemplateColumns: setGridTemplate(props, 'cols', 'xxl'),
    gridTemplateRows: setGridTemplate(props, 'rows', 'xxl'),
    gridTemplateAreas: setGridTemplate(props, 'areas', 'xxl'),
  },
});

const itemStyle = props => ({
  gridColumn: props.colPosition,
  gridRow: props.rowPosition,
  gridArea: props.area,
  placeSelf: props.center ? 'center' : props.placeSelf,
  alignSelf: props.vCenter ? 'center' : props.alignSelf,
  justifySelf: props.hCenter ? 'center' : props.justifySelf,
});

export const Grid = styled.div(
  props => (
    props.container || !props.item ?
    { 
      ...defaultStyle(props), 
      ...containerStyle(props), 
    }
    : 
    { 
      ...itemStyle(props) 
    }
  ),
  gap,
  ...attributes,
);
