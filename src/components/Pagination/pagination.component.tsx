import Button from "../Button/button.component";
import { PaginationWrapper } from "./pagination.style";

export interface PaginationProps {}

const Pagination = ({}: PaginationProps) => {
  return (
    <PaginationWrapper>
      <Button label="<" />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label=">" />
    </PaginationWrapper>
  );
};

export default Pagination;
