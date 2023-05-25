import { API } from "../../../services/api.service"

export const getCharacters = async () => {
    try{
        const response: any = await API.get('/v1/public/characters');
        return response.data.data;
    }catch{
        console.log("erro");
    }
}

export const getCharacterById = async (characterId: number = 1010354) => {
    try{
        const response: any = await API.get(`/v1/public/characters/${characterId}`);
        return response.data.data;
    }catch{
        console.log("erro");
    }
}

export const getComicsByCharacterId = async (characterId: number = 1010354) => {
    try{
        const response: any = await API.get(`/v1/public/characters/${characterId}/comics`);
        return response.data.data;
    }catch{
        console.log("erro");
    }
}