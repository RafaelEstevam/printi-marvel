import { useState } from "react";
import {
  getPaginationOnStorage,
  setPaginationOnStorage,
} from "../helpers/paginationPersist.helper";

interface usePaginationProps {
  paginationProps: string;
}

const usePagination = ({ paginationProps }: usePaginationProps) => {
  const [currentPage] = useState<number | null>(
    getPaginationOnStorage(paginationProps)
  );

  const handleSetPaginationOnStorage = (page: number) => {
    setPaginationOnStorage(page, paginationProps);
  };

  return {
    currentPage,
    handleSetPaginationOnStorage,
  };
};

export default usePagination;
