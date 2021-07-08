import { createGlobalStyle } from 'styled-components';
import setupCSS from './setup';

export default createGlobalStyle`
  ${setupCSS}
  
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
  } 

  button {
    background: none;
    border: 0;
  }

`;
