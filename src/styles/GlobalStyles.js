import { createGlobalStyle } from 'styled-components';
import setupCSS from './setup';
import typographyCSS from './typography';

export default createGlobalStyle`  
  :root {
    --height-forecast: 22vh;
  }

  ${setupCSS}
  ${typographyCSS}
  
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: var(--fz-md);
    font-family: 'Roboto', sans-serif;
  } 

  button {
    background: none;
    border: 0;
  }

  .wrapper {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;    
    /* background: pink; */
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .flex {
    display: flex;
  }
`;
