import { styled } from "styled-components";

export const TableWrapper = styled("div")`
  border-radius: ${({ theme }: any) => theme.border.radiusX4};
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
`;

export const StyledTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: -10px;
`;

export const Tbody = styled("tbody")`
  tr:nth-child(2n + 1) {
    background: ${({ theme }: any) => theme.colors.lightGray};
  }
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Th = styled("th")`
  padding: ${({ theme }: any) => theme.margin.X4};
  text-align: left;
  p {
    color: ${({ theme }: any) => theme.colors.textColor};
    font-size: ${({ theme }: any) => theme.fontSizes.smallest};
    font-weight: 400;
  }
`;

export const Tr = styled("tr")`
  transition: linear all 0.1s;
  cursor: pointer;

  &:hover {
    p {
      text-decoration: underline;
    }
  }

  td:nth-child(2n + 1) {
    background: ${({ theme }: any) => theme.colors.lightGray};
  }
`;

export const Td = styled("td")`
  padding: ${({ theme }: any) => theme.margin.X4};
  text-align: left;
`;

export const Thead = styled("thead")`
  height: 60px;
  // background: ${({ theme }: any) => theme.colors.gray};
`;
