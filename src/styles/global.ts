import { createGlobalStyle } from "styled-components";
import background from "../assets/imgs/download.jpeg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
  body{
    background: #bf040a;
    background-image: url(${background});
    background-blend-mode: overlay;
    background-size: 100% auto;
  }
`;

export default GlobalStyle;
