import { useEffect, useState } from "react"
import { getComicsByCharacterId } from "../../services/characters.services"


const useCharacterComicsList = () => {

    const [characterComics, setCharacterComics] = useState(null);

    const handleGetCharacterComics = async () => {
        const characterComicsList = await getComicsByCharacterId();
        setCharacterComics(characterComicsList)
    }
    
    useEffect(() => {
        handleGetCharacterComics();
    }, [])
    
    return {
        characterComics
    }
}

export default useCharacterComicsList;