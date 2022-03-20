// @ts-check

import styled from 'styled-components';
import debug from '../../config/debug.styled';
import { getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl } from '../../config/getCss.styled';
import { getHover, getHoverLg, getHoverMd, getHoverSm, getHoverXl, getHoverXxl } from '../../config/getHover.styled';
// import screen from '../../config/screen.config';

export const Flex = styled.div(
  /** @param {*} props */
  props => (
    props.container || !props.item ? {
      display: 'flex',
      alignItems: props.vCenter ? 'center' : props.center ? 'center' : props.alignItems,
      justifyContent: props.hCenter ? 'center' : props.center ? 'center' : props.justifyContent,
      gap: props.gap ?? props.gap + 'px',
      flexDirection: props.flexDirection,
    }
    : 
    {
      
    }
  ),
  debug, 
  getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl,
  getHover, getHoverSm, getHoverMd, getHoverLg, getHoverXl, getHoverXxl,
);