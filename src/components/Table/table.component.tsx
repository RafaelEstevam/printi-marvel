import { useNavigate } from "react-router-dom";
import { ColumnsProps } from "../Datatable/datatable.component";
import Text from "../Text/text.component";
import { TableWrapper, StyledTable, Thead, Th, Tr, Td } from "./style";

export interface TableProps {
  link?: string;
  list?: any;
  row?: any;
  columns: ColumnsProps[];
  handleDispatch?: (props: any) => any;
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

const Table = ({ list, columns, link, handleDispatch }: TableProps) => {
  const navigate = useNavigate();

  const handleRedirect = (slug: string, id: number) => {
    navigate(`${link}${slug}`);
    if (handleDispatch) {
      handleDispatch(id);
    }
  };

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
            <Tr
              key={item?.id}
              onClick={() => item.slug && handleRedirect(item.slug, item.id)}
            >
              <TableColumn {...{ columns, row: item }} />
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
