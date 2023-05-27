import { styled } from "styled-components";

export const ComicsTitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ theme }: any) => theme.screens.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }: any) => theme.margin.X2};
  }
`;

export const ComicsTitle = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }: any) => theme.margin.X1};
  @media (max-width: ${({ theme }: any) => theme.screens.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
