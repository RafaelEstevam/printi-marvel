import { styled } from "styled-components";

export interface ImageWrapperProps {
  _height?: string;
  _width?: string;
  _minHeight?: string;
  _minWidth?: string;
  _maxHeight?: string;
  _maxWidth?: string;
  _borderRadius?: string;
}

export const ImageWrapper = styled("div")<ImageWrapperProps>`
  height: ${({ _height }: ImageWrapperProps) => _height};
  width: ${({ _width }: ImageWrapperProps) => _width};
  min-height: ${({ _minHeight }: ImageWrapperProps) => _minHeight};
  min-width: ${({ _minWidth }: ImageWrapperProps) => _minWidth};
  max-height: ${({ _maxHeight }: ImageWrapperProps) => _maxHeight};
  max-width: ${({ _maxWidth }: ImageWrapperProps) => _maxWidth};
  border-radius: ${({ _borderRadius }: ImageWrapperProps) => _borderRadius};
  overflow: hidden;
`;
