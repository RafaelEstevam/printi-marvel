import { styled } from "styled-components";

export const LoadingWrapper = styled("div")`
  position: fixed;
  background: #00000040;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
