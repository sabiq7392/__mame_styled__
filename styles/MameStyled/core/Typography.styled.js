import styled from 'styled-components';
import screen from '../config/screen.config';
import typographyConfig from '../config/typography.config.styled';
import attributes from '../utils/constants/attributes';

const getMediaScreen = (config) => {
  let screens = {};
  for (const [key, value] of Object.entries(config)) {
    screens[`@media (${screen[key]})`] = { fontSize: `${value}px` }
  }
  return screens;
};

/**
 * Set Font Size
 * @category Font
 * @param {*} props props
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'xxl'} size value of size screens
 * @returns {*}
 */
const setFontSize = (props, screen) => {
  if (screen) {
    return { fontSize: props.fontSize[screen] }
  }

  return false;
};

export const Typography = styled.p(
  props => (
    typeof props.size === 'number' ? {
      [`@media (${screen.xs})`]: { fontSize: props.size, }
    }
    : 
    {
      [`@media (${screen.xs})`]: { fontSize: props.size.xs },
      [`@media (${screen.sm})`]: { fontSize: props.size.sm },
      [`@media (${screen.md})`]: { fontSize: props.size.md },
      [`@media (${screen.lg})`]: { fontSize: props.size.lg },
      [`@media (${screen.xl})`]: { fontSize: props.size.xl },
      [`@media (${screen.xxl})`]: { fontSize: props.size.xxl },
    }
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
      : 'left' 
    ),
    fontStyle: (
      props.styleNormal ? 'normal'
      : props.italic ? 'italic'
      : props.oblique ? 'oblique'
      : 'normal'
    ),
    lineHeight: props.lineHeight,
    fontVariant: props.variant,
    color: props.color ??= 'white',
  }),
  ...attributes,
);

// import styled from 'styled-components';
// import debug from '../config/debug.styled';
// import screen from '../config/screen';

// const Typhography = styled.p`
//   border: ${props => props.border ? '1px solid red' : ''};
//   text-align: ${props => props.align ? props.align : 'left'};
//   line-height: ${props => props.lineHeight || 'normal'};
//   color: ${props => props.color ? props.color : 'white'};
//   font-weight: ${props => props.bold ? 'bold' : props.semibold ? '600' : '400'};
//   ${debug}
//   ${props => {
//     if (props.xSmall) return `
//       font-size: 18px;
//     `;

//     if (props.small) return `
//       font-size: 24px;
//     `;

//     if (props.medium) return `
//       font-size: 36px;
//       ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 24px; }`}
//     `;

//     if (props.large) return `
//       font-size: 48px;
//       ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 36px; }`}
//     `;

//     if (props.xLarge) return `
//       font-size: 64px;
//       ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 48px; }`}
//     `;

//     if (props.xxLarge) return `
//       font-size: 100px;
//     `;

//     if (props.xxxLarge) return `
//       font-size: 288px;
//       ${props.responsive === false ? '' : `@media(${screen.md}) { font-size: 144px }`}
//     `;
//   }}
// `;

// export default Typhography;
