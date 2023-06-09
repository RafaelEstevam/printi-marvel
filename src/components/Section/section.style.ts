import { styled } from "styled-components";

export interface SectionWrapperProps {
  _direction?: string;
  _justifycontent?: string;
  _alignitems?: string;
  _gap?: string;
  _flex?: string;
  _height?: string;
  _px?: number;
}

export const SectionWrapper = styled("section")<SectionWrapperProps>`
  margin: 0 auto;
  max-width: ${({ theme }: any) => theme.screens.lg};
  height: ${({ _height }: SectionWrapperProps) => _height};
  display: ${({ _flex }: SectionWrapperProps) => _flex};
  padding: ${({ _px }: SectionWrapperProps) => `0px ${_px}`};
`;

export const DivWrapper = styled("div")`
  min-height: 100vh;
  background: ${({ theme }: any) => theme.colors.backgroundLight};
`;
