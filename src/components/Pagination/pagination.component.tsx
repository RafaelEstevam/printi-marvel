import ButtonPagination from "./components/buttonPagination.component";
import PaginationNumbers from "./components/paginationNumbers.component";
import SearchPagePagination from "./components/searchButton.component";
import { PaginationContainer, PaginationWrapper } from "./pagination.style";

export interface PaginationProps {
  count: number;
  limit: number;
  offset: number;
  total: number;
  currentPage?: number;
  handleLoading?: (props?: any) => any;
}

const Pagination = ({ ...pagination }: PaginationProps) => {
  const max = Math.floor(pagination.total / pagination.limit);
  const currentPage = pagination?.offset / pagination?.limit;

  return pagination.total && pagination.total > pagination.limit ? (
    <PaginationContainer
      _display="flex"
      _justifycontent="space-between"
      _width={"100%"}
    >
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
      <SearchPagePagination max={max} handleSearch={pagination.handleLoading} />
    </PaginationContainer>
  ) : (
    <></>
  );
};

export default Pagination;
