import { generatePagination } from "../functions/pagination.function";
import { PaginationProps } from "../pagination.component";
import ButtonPagination from "./buttonPagination.component";

const PaginationNumbers = ({ currentPage, ...pagination }: PaginationProps) => {
  const limit = pagination?.limit;
  const total = pagination?.total;
  const pageList = generatePagination(currentPage, total, limit, 4);

  return pageList.length > 1 ? (
    <>
      {pageList?.map(
        (page: number) =>
          page !== 0 && (
            <ButtonPagination
              currentPage={currentPage}
              key={page}
              page={page}
              pagination={pagination}
              onClick={() => pagination.handleLoading(page * pagination.limit)}
            />
          )
      )}
    </>
  ) : (
    <></>
  );
};

export default PaginationNumbers;
