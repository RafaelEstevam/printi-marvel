import { styled } from "styled-components";

export const HeaderWrapper = styled("header")`
  background: ${({ theme }: any) => theme.colors.primary};
  min-height: 48px;
  padding: ${({ theme }: any) => theme.margin.X4} 0px;
`;
