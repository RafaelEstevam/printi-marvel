import { styled } from "styled-components";

export interface StyledDivProps {
  _display?: string;
  _flexDirection?: string;
  _alignItems?: string;
  _gap?: string | number;
  _width?: string | number;
  _height?: string | number;
  _padding?: string;
  _borderRadius?: string;
  _overflow?: string;
  _minHeight?: string;
  _maxWidth?: string;
  _maxHeight?: string;
  _minWidth?: string;
  _background?: string;
}

export const Div = styled(`div`)<StyledDivProps>`
  display: ${({ _display }: StyledDivProps) => _display};
  flex-direction: ${({ _flexDirection }: StyledDivProps) => _flexDirection};
  align-items: ${({ _alignItems }: StyledDivProps) => _alignItems};
  gap: ${({ _gap }: StyledDivProps) => _gap};
  width: ${({ _width }: StyledDivProps) => _width};
  height: ${({ _height }: StyledDivProps) => _height};
  padding: ${({ _padding }: StyledDivProps) => _padding};
  border-radius: ${({ _borderRadius }: StyledDivProps) => _borderRadius};
  overflow: ${({ _overflow }: StyledDivProps) => _overflow};
  max-width: ${({ _maxWidth }: StyledDivProps) => _maxWidth};
  max-height: ${({ _maxHeight }: StyledDivProps) => _maxHeight};
  min-width: ${({ _minWidth }: StyledDivProps) => _minWidth};
  min-height: ${({ _minHeight }: StyledDivProps) => _minHeight};
  background: ${({ _background }: StyledDivProps) => _background};
`;
