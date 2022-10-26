import axios from "axios";

const url = 'https://swapi.dev/api/'

export const getCharacters = async () => {
    try {
        const {data} = await axios.get(`${url}/people`);
        return data.results;
    } catch (e) {
        console.error(e);
        // gestion d'erreur
    }
}






