import { createGlobalStyle } from "styled-components";
import background from "../assets/imgs/download.jpeg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  body{
    background: #870000;
    background-image: url(${background});
    background-blend-mode: multiply;
    background-size: auto 100% ;
  }

  ul, li{
    text-decoration: none;
    list-style: none;
  }

`;

export default GlobalStyle;
