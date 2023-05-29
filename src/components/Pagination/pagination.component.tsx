import Button from "../Button/button.component";
import { generatePagination } from "./functions/pagination.function";
import { PaginationWrapper } from "./pagination.style";

export interface PaginationProps {
  count: number;
  limit: number;
  offset: number;
  total: number;
  currentPage?: number;
  handleLoading?: (props?: any) => any;
}

interface ButtonPaginationProps {
  currentPage: number;
  page: number;
  pagination: PaginationProps;
  onClick?: (props?: any) => any;
}

const ButtonPagination = ({
  page,
  currentPage,
  onClick,
  pagination,
}: ButtonPaginationProps) => {
  console.log(page, currentPage);

  return (
    <Button
      className={page === currentPage && "active"}
      key={page}
      onClick={onClick}
      label={page}
    />
  );
};

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

const Pagination = ({ ...pagination }: PaginationProps) => {
  const max = Math.floor(pagination.total / pagination.limit);
  const currentPage = pagination?.offset / pagination?.limit;

  return pagination.total && pagination.total > pagination.limit ? (
    <PaginationWrapper>
      <ButtonPagination
        currentPage={currentPage}
        onClick={() => pagination.handleLoading(0)}
        page={0}
        pagination={pagination}
      />
      <PaginationNumbers currentPage={currentPage} {...pagination} />
      <ButtonPagination
        currentPage={currentPage}
        onClick={() => pagination.handleLoading(max * pagination.limit)}
        page={max}
        pagination={pagination}
      />
    </PaginationWrapper>
  ) : (
    <></>
  );
};

export default Pagination;
