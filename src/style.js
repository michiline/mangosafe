import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700|Montserrat:400,500,700|Open+Sans:400,500,700');
  html > body > #root {
    height: min-content;
  }
  html {
    font-size: 62.5%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: .2rem;
  }
`

    // font-family: 'Roboto', 'Source Serif Pro','Source Code Pro', monospace;
