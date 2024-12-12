import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .body {
    max-width: 800px;
    margin: auto;
    background-color: #eee;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
