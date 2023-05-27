import { useEffect, useState } from "react";
import { PaginationProps } from "../../../../components/Pagination/pagination.component";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { getCaracter } from "../../../../slices/character/character.slice";
import {
  CharacterTable,
  getCharacters,
} from "../../services/characters.services";

const useCharactersList = () => {
  const dispatch = useAppDispatch();

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
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return {
    characters,
    pagination,
    handleLoading,
    handleDispatch,
  };
};

export default useCharactersList;
