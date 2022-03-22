// @ts-check
import screen from '../../config/screen.config';

/**
 * 
 * @param {Object} props // is
 * @param {*} props.css //is
 * @returns {*}
 */
function getCss(props) { return props.css }

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const getCssSm = props => ({ 
  [`@media (${screen.sm})`]: props.cssSm,
});

export const getCssMd = props => ({
  [`@media (${screen.md})`]: props.cssMd,
});

export const getCssLg = props => ({ 
  [`@media (${screen.lg})`]: props.cssLg, 
});

export const getCssXl = props => ({
  [`@media (${screen.xl})`]: props.cssXl,
});

export const getCssXxl = props => ({
  [`@media (${screen.xxl})`]: props.cssXxl,
});

export { getCss };