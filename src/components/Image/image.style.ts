import { styled } from "styled-components";

export interface ImageWrapperProps {
  _height?: string;
  _width?: string;
  _minheight?: string;
  _minwidth?: string;
  _maxHeight?: string;
  _maxwidth?: string;
  _borderradius?: string;
}

export const ImageWrapper = styled("div")<ImageWrapperProps>`
  height: ${({ _height }: ImageWrapperProps) => _height};
  width: ${({ _width }: ImageWrapperProps) => _width};
  min-height: ${({ _minheight }: ImageWrapperProps) => _minheight};
  min-width: ${({ _minwidth }: ImageWrapperProps) => _minwidth};
  max-height: ${({ _maxHeight }: ImageWrapperProps) => _maxHeight};
  max-width: ${({ _maxwidth }: ImageWrapperProps) => _maxwidth};
  border-radius: ${({ _borderradius }: ImageWrapperProps) => _borderradius};
  overflow: hidden;
`;
