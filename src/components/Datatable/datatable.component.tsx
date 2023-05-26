import Pagination, {
  PaginationProps,
} from "../Pagination/pagination.component";
import Table, { TableProps } from "../Table/table.component";

export interface ColumnsProps {
  label: string;
  key: string;
}

interface DatatableProps extends TableProps, PaginationProps {}

const Datatable = ({ list, columns, link, handleDispatch }: DatatableProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Table {...{ list, columns, link, handleDispatch }} />
      <Pagination />
    </div>
  );
};

export default Datatable;
