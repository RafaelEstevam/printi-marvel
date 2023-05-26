import { API } from "../../../services/api.service";
import { formatCharactersListData } from "../helpers/charactersList.helper";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  link: string;
  slug: string;
}

export const getCharacters = async () => {
  try {
    const response: any = await API.get("/v1/public/characters?limit=10");
    const CharactersList: Character[] = formatCharactersListData(
      response.data.data.results
    );
    return CharactersList;
  } catch {
    console.log("erro");
  }
};

export const getCharacterById = async (characterId: number = 1010354) => {
  try {
    const response: any = await API.get(`/v1/public/characters/${characterId}`);
    return response.data.data;
  } catch {
    console.log("erro");
  }
};

export const getComicsByCharacterId = async (characterId: number = 1010354) => {
  try {
    const response: any = await API.get(
      `/v1/public/characters/${characterId}/comics?limit=5`
    );
    return response.data.data;
  } catch {
    console.log("erro");
  }
};
