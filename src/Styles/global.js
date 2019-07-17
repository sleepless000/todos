import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 100%;
  box-sizing: border-box;
  background: rgb(238,174,202);
background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,221,233,0.3785889355742297) 100%);
}
`;
