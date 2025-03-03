import { useParams } from "react-router";

export const getMoviesDetail = async({params}) => {
    const id = params.id;
    // console.log(id);return;
    try {
        const resp = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_MOVIE_API_KEY}`);
        const data = resp.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}