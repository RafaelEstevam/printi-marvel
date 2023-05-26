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
    background: #870000;
    background-image: url(${background});
    background-blend-mode: multiply;
    background-size: auto 100% ;
  }
`;

export default GlobalStyle;
