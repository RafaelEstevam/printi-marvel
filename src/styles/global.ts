import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
  body{
    background: ${({ theme }: any) => theme.colors.lightGray}
  }
`;

export default GlobalStyle;
