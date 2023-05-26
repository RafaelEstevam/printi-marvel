import Pagination from "../Pagination/pagination.component";
import Table from "../Table/table.component";

export interface ColumnsProps {
  label: string;
  key: string;
}

interface DatatableProps {
  list: any;
  columns: ColumnsProps[];
}

const Datatable = ({ list, columns }: DatatableProps) => {
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
      <Table {...{ list, columns }} />
      <Pagination />
    </div>
  );
};

export default Datatable;
