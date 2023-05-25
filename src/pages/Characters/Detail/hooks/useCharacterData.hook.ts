import { useEffect, useState } from "react";
import { getCharacterById } from "../../services/characters.services";
import useCharacterComicsList from "./useCharacterComicsList.hook";

const useCharacterData = () => {
  const [character, setCharacter] = useState(null);

  const handleGetCharacter = async () => {
    const characterData = await getCharacterById();
    setCharacter(characterData);
  };

  useEffect(() => {
    handleGetCharacter();
  }, []);

  return {
    character,
  };
};

export default useCharacterData;
