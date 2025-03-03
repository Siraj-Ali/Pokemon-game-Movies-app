import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

export const fetchPokeList = async (endpoint) => {
    try {
        const url = endpoint.startsWith("https") ? endpoint : endpoint;
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        throw new Error("Failed to load data..");
    }
}

export const fetchListDetails = async (data) => {
    try {
        const respPromisData = await Promise.all(
            data.map(async (pokemon) => {
                const resp = await axios.get(pokemon.url);
                return resp.data;
            })
        );
        console.log("Response",respPromisData)
        return respPromisData;
    } catch (error) {
        throw new Error("Failed to load detail");
    }
}