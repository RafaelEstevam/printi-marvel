import { useEffect, useState } from "react";
import {
  CharacterTable,
  getCharacters,
} from "../../services/characters.services";

const useCharactersList = () => {
  const [characters, setCharacters] = useState<CharacterTable[]>([]);

  const handleGetCharacters = async () => {
    const charactersList = await getCharacters();
    setCharacters(charactersList);
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return {
    characters,
  };
};

export default useCharactersList;
