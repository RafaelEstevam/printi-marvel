import { useEffect, useState } from "react";
import { getCharacters } from "../../services/characters.services";

const useCharactersList = () => {
  const [characters, setCharacters] = useState([]);

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
