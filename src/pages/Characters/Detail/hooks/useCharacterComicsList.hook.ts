import { useEffect, useState } from "react";
import { PaginationProps } from "../../../../components/Pagination/pagination.component";
import { getPaginationOnStorage } from "../../../../helpers/paginationPersist.helper";
import { useAppSelector } from "../../../../hooks";
import usePagination from "../../../../hooks/usePagination.hook";
import { getComicsByCharacterId } from "../../services/characters.services";
import { ComicsProps } from "../components/comicsDetail.component";

const useCharacterComicsList = () => {
  const characterId = useAppSelector((state) => state.character.id);
  const [characterComics, setCharacterComics] = useState<ComicsProps[]>(null);
  const [pagination, setPagination] = useState<PaginationProps>();
  const { currentPage, handleSetPaginationOnStorage } = usePagination({
    paginationProps: "characterComicsListPageOffset",
  });

  const handleGetCharacterComics = async (id: number, page?: number) => {
    const { comicsList, pagination } = await getComicsByCharacterId(id, page);
    setCharacterComics(comicsList);
    setPagination(pagination);
  };

  const handleLoading = (page: number) => {
    handleGetCharacterComics(characterId, page);
    handleSetPaginationOnStorage(page);
  };

  useEffect(() => {
    handleGetCharacterComics(characterId, currentPage || 0);
  }, []);

  return {
    characterComics,
    pagination,
    handleLoading,
  };
};

export default useCharacterComicsList;
