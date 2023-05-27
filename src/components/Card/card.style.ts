import { styled } from "styled-components";

export interface CardWrapperProps {
  _px?: boolean;
  _py?: boolean;
  _bg?: string;
}

export const CardWrapper = styled(`div`)<CardWrapperProps>`
  padding: ${({ _px, _py }: CardWrapperProps) => `${_py} ${_px}`};
  background-color: ${({ theme, _bg }: any) =>
    !_bg ? theme.colors.white : _bg};
  border-radius: ${({ theme }: any) => theme.border.radiusX4};
  width: 100%;
`;
