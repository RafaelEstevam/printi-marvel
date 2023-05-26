import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks";
import { getCaracter } from "../../../../slices/character/character.slice";
import {
  CharacterTable,
  getCharacters,
} from "../../services/characters.services";

const useCharactersList = () => {
  const dispatch = useAppDispatch();

  const [characters, setCharacters] = useState<CharacterTable[]>([]);

  const handleGetCharacters = async () => {
    const charactersList = await getCharacters();
    setCharacters(charactersList);
  };

  const handleDispatch = (props: any) => {
    dispatch(getCaracter(props));
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return {
    characters,
    handleDispatch,
  };
};

export default useCharactersList;
