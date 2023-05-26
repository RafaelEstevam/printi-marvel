import { styled } from "styled-components";

export const ButtonWrapper = styled("button")`
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }: any) => theme.colors.primary};
  border: 2px solid ${({ theme }: any) => theme.colors.primary};
  border-radius: ${({ theme }: any) => theme.border.radiusX4};
  padding: ${({ theme }: any) => `${theme.margin.X3} ${theme.margin.X4}`};
  font-size: ${({ theme }: any) => theme.fontSizes.small};
  transition: all linear 0.1s;

  &.active {
    background: ${({ theme }: any) => theme.colors.primary};
    color: ${({ theme }: any) => theme.colors.white};
  }

  &:hover {
    box-shadow: 0px 6px 0px ${({ theme }: any) => theme.colors.primary}70;
  }
  &:active {
    box-shadow: 0px 6px 0px ${({ theme }: any) => theme.colors.primary}95;
  }
`;
