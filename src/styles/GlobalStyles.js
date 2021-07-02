import { createGlobalStyle } from "styled-components";
import setupCSS from "./setup";

export default createGlobalStyle`
  ${setupCSS}

  body {
    padding: 0;
    margin: 0;
    background-color: orange;
  } 

`;
