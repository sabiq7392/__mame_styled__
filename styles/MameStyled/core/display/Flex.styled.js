import styled from 'styled-components';
import debug from '../../config/debug.styled';
import { getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl } from '../../config/getCss.styled';
import screen from '../../config/screen.config';

export const Flex = styled.div(
  props => (`
    display: flex;
    ${props.center ? `
      align-items: center;
      justify-content: center;
    ` : props.vCenter ? `
      align-items: center;
    ` : props.hCenter ? `
      justify-content: center;
    ` : ''}
  
    gap: ${props.gap + 'px'};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    border: ${props.border ? '1px solid red' : ''};
    flex-direction: ${props.direction};
  `),
  debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl,
);