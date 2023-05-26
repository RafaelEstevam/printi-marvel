import { useEffect, useState } from "react";
import { Character, getCharacters } from "../../services/characters.services";

const useCharactersList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

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
