import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const PaginationWrapper = styled("div")`
  display: flex;
  gap: ${({ theme }: any) => theme.margin.X2};

  @media (max-width: ${({ theme: any }) => theme.screens.sm}) {
    overflow-x: scroll;
    max-width: 100%;
  }
`;
