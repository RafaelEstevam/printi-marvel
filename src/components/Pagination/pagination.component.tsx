import Button from "../Button/button.component";
import { generatePagination } from "./functions/pagination.function";
import { PaginationWrapper } from "./pagination.style";

export interface PaginationProps {
  count: number;
  limit: number;
  offset: number;
  total: number;
  handleLoading?: (props?: any) => any;
}

const PaginationNumbers = ({ ...pagination }: PaginationProps) => {
  const currentPage = pagination?.offset / pagination?.limit;
  const limit = pagination?.limit;
  const total = pagination?.total;

  const pageList = generatePagination(currentPage, total, limit, 4);

  return pageList.length > 1 ? (
    <>
      {pageList?.map(
        (page: number) =>
          page !== 0 && (
            <Button
              key={page}
              onClick={() => pagination.handleLoading(page * limit)}
              label={page}
            />
          )
      )}
    </>
  ) : (
    <></>
  );
};

const Pagination = ({ ...pagination }: PaginationProps) => {
  const max = Math.floor(pagination.total / pagination.limit);

  return pagination.total && pagination.total > pagination.limit ? (
    <PaginationWrapper>
      <Button onClick={() => pagination.handleLoading(0)} label="0" />
      <PaginationNumbers {...pagination} />
      <Button
        onClick={() => pagination.handleLoading(max * pagination.limit)}
        label={max}
      />
    </PaginationWrapper>
  ) : (
    <></>
  );
};

export default Pagination;
