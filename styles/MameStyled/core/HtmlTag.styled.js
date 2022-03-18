import styled from 'styled-components';
import { getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl } from '../config/getCss.styled';
import debug from '../config/debug.styled';

export const Div = styled.div(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Article = styled.article(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Section = styled.section(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Figure = styled.figure(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Header = styled.header(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Footer = styled.footer(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Nav = styled.nav(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);
export const Button = styled.button(debug, getCss, getCssSm, getCssMd, getCssLg, getCssXl, getCssXxl);