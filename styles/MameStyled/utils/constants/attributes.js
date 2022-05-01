import debug from '../styling/debug.styled';
import css from '../styling/css.styled';
import hover from '../styling/hover';
import { globalResponsiveProperty } from '../styling/responsive-property';

const attributes = [debug, css, hover, ...globalResponsiveProperty];

export default attributes;
