import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks";
import { getCharacterById } from "../../services/characters.services";

const useCharacterData = () => {
  const characterId = useAppSelector((state) => state.character.id);
  const [character, setCharacter] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetCharacter = async (id: number) => {
    const characterData = await getCharacterById(id, setLoading);
    if (characterData) {
      setCharacter(characterData?.results[0]);
    }
  };

  useEffect(() => {
    handleGetCharacter(characterId);
  }, []);

  return {
    character,
    loading,
  };
};

export default useCharacterData;
