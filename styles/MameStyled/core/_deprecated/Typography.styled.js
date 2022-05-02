// JUST TRY USING  GENERAL TAG HTML AND MORE READABLE TOO SUCH P H1 H2, H3 ETC...


import styled from 'styled-components';
import screen from '../../config/screen.config';
import typographyConfig from '../../config/typography.config.styled';
import attributes from '../../utils/constants/attributes';

const getMediaScreen = (config) => {
  let screens = {};
  for (const [key, value] of Object.entries(config)) {
    screens[`@media (${screen[key]})`] = { fontSize: `${value}px` }
  }
  return screens;
};

export const Typography = styled.p(
  props => (
    !props.size ? false : (
      typeof props.size === 'number' ? {
        [`@media (${screen.xs})`]: { fontSize: props.size, }
      }
      : typeof props.size !== 'number' ?
      {
        [`@media (${screen.xs})`]: { fontSize: props.size.xs },
        [`@media (${screen.sm})`]: { fontSize: props.size.sm },
        [`@media (${screen.md})`]: { fontSize: props.size.md },
        [`@media (${screen.lg})`]: { fontSize: props.size.lg },
        [`@media (${screen.xl})`]: { fontSize: props.size.xl },
        [`@media (${screen.xxl})`]: { fontSize: props.size.xxl },
      }
      : false
    ) 
  ),
  props => ({
    fontWeight: (
      props.weight ? props.weight 
      : props.bolder ? 'bolder' 
      : props.bold ? 'bold' 
      : props.semibold ? 600
      : props.normal ? 'normal' 
      : props.lighter ? 'lighter'
      : 'normal'
    ),
    textAlign: (
      props.center ? 'center' 
      : props.left ? 'left'
      : props.right ? 'right'
      : props.align
    ),
    fontStyle: (
      props.styleNormal ? 'normal'
      : props.italic ? 'italic'
      : props.oblique ? 'oblique'
      : props.fontStyle
    ),
    lineHeight: props.lineHeight,
    fontVariant: props.variant,
    color: props.color ??= 'white',
  }),
  ...attributes,
);
