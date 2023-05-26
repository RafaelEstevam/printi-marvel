import { ColumnsProps } from "../Datatable/datatable.component";
import Text from "../Text/text.component";
import { TableWrapper, StyledTable, Thead, Th, Tr, Td } from "./style";

interface TableProps {
  list?: any;
  row?: any;
  columns: ColumnsProps[];
}

const TableColumn = ({ columns, row }: TableProps) => {
  return (
    <>
      {columns.map((column) => (
        <Td key={column.key}>
          <Text text={row[column.key]} />
        </Td>
      ))}
    </>
  );
};

const Table = ({ list, columns }: TableProps) => {
  return (
    <TableWrapper>
      <StyledTable>
        <Thead>
          <Tr>
            {columns?.map((column) => (
              <Th key={column.key}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <tbody>
          {list?.map((item: any) => (
            <Tr key={item?.id} onClick={item?.onClick}>
              <TableColumn {...{ columns, row: item }} />
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
