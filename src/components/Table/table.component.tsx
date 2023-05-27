import useNavigationHook from "../../hooks/useNavigation.hook";
import { ColumnsProps } from "../Datatable/datatable.component";
import Text from "../Text/text.component";
import {
  TableWrapper,
  StyledTable,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from "./table.style";

export interface TableProps {
  link?: string;
  list?: any;
  row?: any;
  columns: ColumnsProps[];
  handleDispatch?: (props: any) => any;
}

const TableNoContent = () => {
  return <Text text="Loading content..." />;
};

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
  const { handleNavigateTo } = useNavigationHook();

  const handleRedirect = (slug: string, id: number) => {
    handleNavigateTo(`${link}${slug}`);
    if (handleDispatch) {
      handleDispatch(id);
    }
  };

  return list.length > 0 ? (
    <TableWrapper>
      <StyledTable>
        <Thead>
          <Tr>
            {columns?.map((column) => (
              <Th key={column.key}>
                <Text text={column.label} />
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {list?.map((item: any) => (
            <Tr
              key={item?.id}
              onClick={() => item.slug && handleRedirect(item.slug, item.id)}
            >
              <TableColumn {...{ columns, row: item }} />
            </Tr>
          ))}
        </Tbody>
      </StyledTable>
    </TableWrapper>
  ) : (
    <>
      <TableNoContent />
    </>
  );
};

export default Table;
