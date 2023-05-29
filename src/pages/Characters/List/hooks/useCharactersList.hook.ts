import { useEffect, useState } from "react";
import { PaginationProps } from "../../../../components/Pagination/pagination.component";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { getCaracter } from "../../../../slices/character/character.slice";
import {
  CharacterTable,
  getCharacters,
} from "../../services/characters.services";

import {
  getPaginationOnStorage,
  setPaginationOnStorage,
} from "../../../../helpers/paginationPersist.helper";
import usePagination from "../../../../hooks/usePagination.hook";

const useCharactersList = () => {
  const dispatch = useAppDispatch();
  const { currentPage, handleSetPaginationOnStorage } = usePagination({
    paginationProps: "charactersListPageOffset",
  });
  const [characters, setCharacters] = useState<CharacterTable[]>([]);
  const [pagination, setPagination] = useState<PaginationProps>();

  const handleGetCharacters = async (page?: number) => {
    const { charactersList, pagination } = await getCharacters(page);
    setCharacters(charactersList);
    setPagination(pagination);
  };

  const handleDispatch = (props: any) => {
    dispatch(getCaracter(props));
  };

  const handleLoading = (page: number) => {
    handleGetCharacters(page);
    handleSetPaginationOnStorage(page);
  };

  useEffect(() => {
    handleGetCharacters(currentPage || 0);
  }, []);

  return {
    characters,
    pagination,
    handleLoading,
    handleDispatch,
  };
};

export default useCharactersList;
