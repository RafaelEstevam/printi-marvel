import { styled } from "styled-components";
import { SectionWrapperProps } from "../Section/style";

export interface GridItemWrapperProps {
  _lg?: number;
  _md?: number;
  _sm?: number;
  _xs?: number;
}

export const GridContent = styled("div")`
  margin: 0 auto;
  max-width: ${({ theme }: any) => theme.screens.lg};
  padding: 0px ${({ theme }: any) => theme.margin.X4};
`;

export const GridWrapper = styled("div")<SectionWrapperProps>`
  width: 100%;
  display: ${({ _flex }: SectionWrapperProps) => (!_flex ? "block" : "flex")};
  flex-wrap: ${({ _flex }: SectionWrapperProps) => (!_flex ? "block" : "wrap")};
  flex-direction: ${({ _direction }: SectionWrapperProps) => _direction};
  justify-content: ${({ _justifycontent }: SectionWrapperProps) =>
    _justifycontent};
  align-items: ${({ _alignitems }: SectionWrapperProps) => _alignitems};
  gap: ${({ _gap }: any) => _gap};
  height: ${({ _fullheight }: SectionWrapperProps) =>
    _fullheight ? "100vh" : "inherit"};
`;

export const GridItemWrapper = styled("div")<GridItemWrapperProps>`
  width: ${({ _lg }: GridItemWrapperProps) => `calc(100%/${12 / _lg})`};

  @media (max-width: ${(props: any) => props.theme.screens.md}) {
    width: ${({ _md }: GridItemWrapperProps) => `calc(100%/${12 / _md})`};
  }

  @media (max-width: ${(props: any) => props.theme.screens.sm}) {
    width: ${({ _sm }: GridItemWrapperProps) => `calc(100%/${12 / _sm})`};
  }

  @media (max-width: ${(props: any) => props.theme.screens.xs}) {
    width: ${({ _xs }: GridItemWrapperProps) => `calc(100%/${12 / _xs})`};
  }
`;
