import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export interface ButtonWrapperProps {
  _color?: string;
}

export const ButtonWrapper = styled("button")<ButtonWrapperProps>`
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ _color }: ButtonWrapperProps) => _color};
  border: 2px solid ${({ _color }: ButtonWrapperProps) => _color};
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

ButtonWrapper.defaultProps = {
  _color: theme.colors.primary,
};
