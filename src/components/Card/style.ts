import { styled } from "styled-components";

export interface CardWrapperProps {
  _px?: boolean;
  _py?: boolean;
}

export const CardWrapper = styled(`div`)<CardWrapperProps>`
  padding: ${({ _px, _py }: CardWrapperProps) => `${_py}px ${_px}px`};
  background-color: ${({ theme }: any) => theme.colors.white};
  border-radius: ${({ theme }: any) => theme.border.radius}px;
`;
