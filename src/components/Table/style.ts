import { styled } from "styled-components";

export const TableWrapper = styled("div")``;

export const Table = styled("table")`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled("th")`
  padding: ${({ theme }: any) => theme.margin.X4}px;
  text-align: left;
`;

export const Tr = styled("tr")``;

export const Td = styled("t")`
  padding: ${({ theme }: any) => theme.margin.X4}px;
  text-align: left;
`;

export const Thead = styled("thead")`
  height: 60px;
  background: ${({ theme }: any) => theme.colors.gray};
`;
