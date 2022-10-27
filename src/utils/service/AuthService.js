import axios from "axios";

const api = 'http://localhost:8081';

// Inscription : va créer l'utilisateur, et lancer une erreur si il existe déjà
export const register = async (user, stay_logged = true) => {
    const {data} = await axios.post(`${api}/register`, user);
    // retourne un token de connexion sous la forme : {accessToken: xxxxxxxx}
    // sessionStorage → le temps de la session
    // localStorage → durée de stockage indeterminée
    persistToken(data?.accessToken, stay_logged);
    return true;
}

// Connexion : va vérifier les infos de l'utilisateur, et erreur si l'email n'existe pas ou si le password n'est pas bon
export const login = async (user, stay_logged = true) => {
    const {data} = await axios.post(`${api}/login`, user);
    persistToken(data?.accessToken, stay_logged);
    return true;
}

const persistToken = (token, stay_logged) => {
    if(stay_logged) localStorage.setItem('token', token);
    else sessionStorage.setItem('token', token);
}

export const is_logged = () => {
    return !!localStorage.getItem('token') || !!sessionStorage.getItem('token');
}

export const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}