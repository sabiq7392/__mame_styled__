// @ts-check 
'use strict'

import styled from 'styled-components';
import debug from '../../config/debug.styled';
import { getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl } from '../../config/getCss.styled';
import screen from '../../config/screen.config';

/**
 * Set Grid Template
 * @param {*} props props
 * @param {'rows'|'cols'|'areas'} direction rows or cols
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'xxl'} size value of size screens
 * @returns {*}
 */
const setGridTemplate = (props, direction, size) => {
  if (props[direction]) {
    if (props[direction][size]) {
      return typeof props[direction][size] === 'number' ? `repeat(${props[direction][size]}, 1fr)` : props[direction].xs;
    } else {
      return typeof props[direction] === 'number' ? `repeat(${props[direction]}, 1fr)` : props[direction];
    }
  }

  return false;
};

const getMediaScreen = (config) => {
  let screens = {};
  for (const [key, value] of Object.entries(config)) {
    screens[`@media (${screen[key]})`] = { fontSize: `${value}px` }
  }
  return screens;
};

/**
 * @example 
 * // Grid - container | !item
 * <Grid container placeItems="center"></Grid>
 * <Grid container alignItems="center"></Grid>
 * <Grid container justifyContent="center"></Grid>
 * <Grid container gap={15}></Grid>
 * <Grid container areas="
 *  'documentation learn'
 *  'examples deploy'
 * ">
 * </Grid>
 * <Grid container areas={{ xs: {name-area}, sm: ..., md: ..., lg: ..., xl: ..., xxl: ... }}></Grid>
 * <Grid item cols={number}></Grid>
 * <Grid item cols={{ xs: {number}, sm: ..., md: ..., lg: ..., xl: ..., xxl: ... }}></Grid>
 * <Grid item rows={number}></Grid>
 * <Grid item rows={{ xs: {number}, sm: ..., md: ..., lg: ..., xl: ..., xxl: ... }}></Grid>
 * 
 * // Grid - item
 * <Grid item colPosition={number}></Grid>
 * <Grid item rowPosition={number}></Grid>
 * <Grid item area="name-area | {string}"></Grid>
 */
export const Grid = styled.div(
  /** @param {*} props  */
  props => (
    props.container || !props.item ? 
    {
      display: 'grid',
      placeItems: props.center ? 'center' : props.placeItems,
      alignItems: props.vCenter ? 'center' : props.alignItems,
      justifyContent: props.hCenter ? 'center' : props.justifyContent,
      gap: props.gap + 'px',
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
    }
    :
    {
      gridColumn: props.colPosition,
      gridRow: props.rowPosition,
      gridArea: props.area,
    }
  ),
  debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl,
);