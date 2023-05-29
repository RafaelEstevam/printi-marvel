import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { Div } from "../Layout/layout.style";

export const PaginationWrapper = styled("div")`
  display: flex;
  gap: ${({ theme }: any) => theme.margin.X2};

  @media (max-width: ${({ theme: any }) => theme.screens.sm}) {
    overflow-x: scroll;
    max-width: 100%;
  }
`;

export const PaginationContainer = styled(Div)`
  @media (max-width: ${({ theme: any }) => theme.screens.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }: any) => theme.margin.X4};
  }
`;
