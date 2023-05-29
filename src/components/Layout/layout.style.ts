import { styled } from "styled-components";

export interface StyledDivProps {
  _display?: string;
  _flexdirection?: string;
  _alignitems?: string;
  _gap?: string | number;
  _width?: string | number;
  _height?: string | number;
  _padding?: string;
  _borderradius?: string;
  _overflow?: string;
  _minheight?: string;
  _maxwidth?: string;
  _maxHeight?: string;
  _minwidth?: string;
  _background?: string;
  _justifycontent?: string;
}

export const Div = styled(`div`)<StyledDivProps>`
  display: ${({ _display }: StyledDivProps) => _display};
  flex-direction: ${({ _flexdirection }: StyledDivProps) => _flexdirection};
  align-items: ${({ _alignitems }: StyledDivProps) => _alignitems};
  gap: ${({ _gap }: StyledDivProps) => _gap};
  width: ${({ _width }: StyledDivProps) => _width};
  height: ${({ _height }: StyledDivProps) => _height};
  padding: ${({ _padding }: StyledDivProps) => _padding};
  border-radius: ${({ _borderradius }: StyledDivProps) => _borderradius};
  overflow: ${({ _overflow }: StyledDivProps) => _overflow};
  max-width: ${({ _maxwidth }: StyledDivProps) => _maxwidth};
  max-height: ${({ _maxHeight }: StyledDivProps) => _maxHeight};
  min-width: ${({ _minwidth }: StyledDivProps) => _minwidth};
  min-height: ${({ _minheight }: StyledDivProps) => _minheight};
  background: ${({ _background }: StyledDivProps) => _background};
  justify-content: ${({ _justifycontent }: StyledDivProps) => _justifycontent};
`;
