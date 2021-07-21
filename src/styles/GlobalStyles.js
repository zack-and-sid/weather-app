import { createGlobalStyle } from "styled-components";
import setupCSS from "./setup";

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

   .wrapper {
    max-width: 900px;
    margin: 0 auto;
    /* background: pink; */
  }

  img {
    max-width: 100%;
  }
  
  .flex {
    display: flex;
  }
`;
