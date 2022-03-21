/**
 * @example
 * @attribute:
 * @css <Container as={Grid} center css={{ paddingTop: 60, paddingBottom: 120 }} cssLg={{ paddingTop: 150, paddingBottom: 120 }}></Container>
 * css || cssSm || cssMd || cssLg || cssXl || cssXxl => media-screen
 * @hover <Container css={{ ':hover': { backround: 'red' } }}></Container>
 * 
 * 
 * @tag
 * @Typography 
 * @attribute:
 *  font-weight => weight={600} || weight="bold"
 *  color => color="black" || color="#000"
 *  lineheight => lineHeight="175%"
 *  text-align => center || left || right 
 *  font-size (with media screen) => xs={number} sm md lg xl xxl
 *  font-style => oblique || italic || normal
 * 
 * @tag
 * @Grid
 * @attribute:
 * justify-content => justifyContent="{value}"
 * align-items => alignItems="{value}"
 * gap => gap={number}
 * center => justify-content: center && align-items: center
 * vCenter => align-items: center
 * hCenter => justifyContent: center
 * col => grid-template-columns: repeat({number}, 1fr) }|| grid-template-columns: 1fr 1fr 1fr || {!number = write your value}
 * rows => grid-template-rows: repeat({number}, 1fr) }|| grid-template-rows: 1fr 1fr 1fr || {!number = write your value}
 * 
 * @tag
 * @Flex
 * @attribute:
 * justify-content => justifyContent="{value}"
 * align-items => alignItems="{value}"
 * gap => gap={number}
 * flex-direction => direction="row || column"
 * center => justify-content: center && align-items: center
 * vCenter => align-items: center
 * hCenter => justifyContent: center
 * 
 * @debug you can place debug attribute in all mame tag
 */

// import { Typography } from './core/Typography.styled';
// import { Grid, Flex } from './core/display/_Display.styled';
// import { 
//   Div, 
//   Section, 
//   Article, 
//   Header, 
//   Footer, 
//   Figure, 
//   Nav, 
//   Button, 
//   Main, 
//   H1, H2, H3, H4,H5, H6, P, A,
//   Form, Input, Legend, Fieldset, Label
// } from './core/HtmlTag.styled';

// export { 
//   Typography, Grid, Flex, 
//   H1, H2, H3, H4, H5, H6, P, A,
//   Form, Input, Legend, Fieldset, Label,
//   Div, Section, Article, Header, Footer, Figure, Nav, Button, Main,
// };
