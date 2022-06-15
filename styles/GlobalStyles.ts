import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    /* margin: 0;
    padding: 0; */
  }

  h1, h2, h3, h4, h5, h6, p, figure, blockquote {
    margin: 0!important;
  }
`;
