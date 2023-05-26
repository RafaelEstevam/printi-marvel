import { useEffect, useState } from "react";
import { getCharacterById } from "../../services/characters.services";

const useCharacterData = () => {
  const [character, setCharacter] = useState(null);

  const handleGetCharacter = async () => {
    const characterData = await getCharacterById();
    setCharacter(characterData.results[0]);
  };

  useEffect(() => {
    handleGetCharacter();
  }, []);

  return {
    character,
  };
};

export default useCharacterData;
