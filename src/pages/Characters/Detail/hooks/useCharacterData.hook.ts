import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks";
import { getCharacterById } from "../../services/characters.services";

const useCharacterData = () => {
  const characterId = useAppSelector((state) => state.character.id);
  const [character, setCharacter] = useState<any>({});

  const handleGetCharacter = async (id: number) => {
    const characterData = await getCharacterById(id);
    setCharacter(characterData);
  };

  useEffect(() => {
    handleGetCharacter(characterId);
  }, []);

  return {
    character,
  };
};

export default useCharacterData;
