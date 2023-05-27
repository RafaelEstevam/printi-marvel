import { useEffect, useState } from "react";
import { PaginationProps } from "../../../../components/Pagination/pagination.component";
import { useAppSelector } from "../../../../hooks";
import { getComicsByCharacterId } from "../../services/characters.services";
import { ComicsProps } from "../components/comicDetail.component";

const useCharacterComicsList = () => {
  const characterId = useAppSelector((state) => state.character.id);
  const [characterComics, setCharacterComics] = useState<ComicsProps[]>(null);
  const [pagination, setPagination] = useState<PaginationProps>();

  const handleGetCharacterComics = async (id: number, page?: number) => {
    const { comicsList, pagination } = await getComicsByCharacterId(id, page);
    setCharacterComics(comicsList);
    setPagination(pagination);
  };

  const handleLoading = (page: number) => {
    handleGetCharacterComics(characterId, page);
  };

  useEffect(() => {
    handleGetCharacterComics(characterId, 0);
  }, []);

  return {
    characterComics,
    pagination,
    handleLoading,
  };
};

export default useCharacterComicsList;
