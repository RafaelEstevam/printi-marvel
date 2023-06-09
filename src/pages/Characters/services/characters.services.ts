import { PaginationProps } from "../../../components/Pagination/pagination.component";
import { API } from "../../../services/api.service";
import { ComicsProps } from "../Detail/components/comicsDetail.component";
import { formatCharactersListData } from "../helpers/charactersList.helper";
import { formatComicsListData } from "../helpers/comicsList.helper";

export interface CharacterTable {
  id: number;
  name: string;
  description: string;
  modified: string;
  slug?: string;
  redirect?: (slug: string) => {};
}

export const getCharacters = async (
  page?: number,
  setLoading?: (show: boolean) => any
) => {
  setLoading(true);

  try {
    const response: any = await API.get(
      `/v1/public/characters?limit=10&offset=${page}`
    );
    const charactersList: CharacterTable[] = formatCharactersListData(
      response.data.data.results
    );

    const pagination: PaginationProps = {
      count: response.data.data.count,
      limit: response.data.data.limit,
      offset: response.data.data.offset,
      total: response.data.data.total,
    };

    return { charactersList, pagination };
  } catch {
    const charactersList: CharacterTable[] = [];
    return { charactersList };
  } finally {
    setLoading(false);
  }
};

export const getCharacterById = async (
  id: number,
  setLoading?: (show: boolean) => any
) => {
  setLoading(true);

  try {
    const response: any = await API.get(`/v1/public/characters/${id}`);
    return response.data.data;
  } catch {
    return null;
  } finally {
    setLoading(false);
  }
};

export const getComicsByCharacterId = async (
  characterId: number,
  page?: number,
  setLoading?: (show: boolean) => any
) => {
  setLoading(true);

  try {
    const response: any = await API.get(
      `/v1/public/characters/${characterId}/comics?limit=10&offset=${page}`
    );
    const comicsList: ComicsProps[] = formatComicsListData(
      response.data.data.results
    );

    const pagination: PaginationProps = {
      count: response.data.data.count,
      limit: response.data.data.limit,
      offset: response.data.data.offset,
      total: response.data.data.total,
    };

    return { comicsList, pagination };
  } catch {
    const comicsList: ComicsProps[] = [];
    const pagination: PaginationProps = {
      count: 0,
      limit: 0,
      offset: 0,
      total: 0,
    };

    return { comicsList, pagination };
  } finally {
    setLoading(false);
  }
};
