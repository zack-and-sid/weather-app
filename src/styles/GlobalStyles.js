import { createGlobalStyle } from "styled-components";
import setupCSS from "./setup";
import typographyCSS from "./typography";
import keyframesCSS from "./keyframes";

export default createGlobalStyle`  
  :root {
    --clr-primary: orange;
    --clr-secondary: #635e9b;
    --height-forecast: 22vh;
    --height-footer: 3em;
    --height-header: 145px;
  }

  ${setupCSS}
  ${typographyCSS}
  ${keyframesCSS}
  
  html {
    font-size: 62.5%;
    height: -webkit-fill-available;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: var(--fz-md);
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    height: -webkit-fill-available;
    height: fill-available;
  } 

  button {
    background: none;
    border: 0;
  }

  .wrapper {
    width: 90%;
    max-width: 600px;
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
