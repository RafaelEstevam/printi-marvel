import { styled } from "styled-components";

export const TableWrapper = styled("div")`
  border-radius: ${({ theme }: any) => theme.border.radiusX4};
  overflow: hidden;
  width: 100%;
`;

export const StyledTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
  tr:nth-child(2n + 1) {
    background: ${({ theme }: any) => theme.colors.lightGray};
  }
`;

export const Th = styled("th")`
  padding: ${({ theme }: any) => theme.margin.X4};
  text-align: left;
  background: ${({ theme }: any) => theme.colors.gray};
`;

export const Tr = styled("tr")`
  transition: linear all 0.1s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px ${({ theme }: any) => theme.colors.primary}80;
  }

  td:nth-child(2n + 1),
  th:nth-child(2n + 1) {
    background: ${({ theme }: any) => theme.colors.lightGray};
  }
`;

export const Td = styled("td")`
  padding: ${({ theme }: any) => theme.margin.X4};
  text-align: left;
`;

export const Thead = styled("thead")`
  height: 60px;
  background: ${({ theme }: any) => theme.colors.gray};
`;
