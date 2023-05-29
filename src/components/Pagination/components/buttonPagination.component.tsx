import Button from "../../Button/button.component";
import { PaginationProps } from "../pagination.component";

interface ButtonPaginationProps {
  currentPage: number;
  page: number;
  pagination: PaginationProps;
  onClick?: (props?: any) => any;
}

export const ButtonPagination = ({
  page,
  currentPage,
  onClick,
}: ButtonPaginationProps) => {
  return (
    <Button
      id={`page-id-${page}`}
      className={page === currentPage && "active"}
      key={page}
      onClick={onClick}
      label={page + 1}
    />
  );
};

export default ButtonPagination;
