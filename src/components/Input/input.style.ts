import { styled } from "styled-components";

export const InputWrapper = styled("input")`
  padding: ${({ theme }: any) => theme.margin.X4};
  background: ${({ theme }: any) => theme.colors.lightGray};
  border-radius: ${({ theme }: any) => theme.border.radiusX4};
  border: 0px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }: any) => theme.colors.primary};
  }
`;
