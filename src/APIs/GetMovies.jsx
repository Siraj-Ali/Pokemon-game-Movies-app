export const getMovies = async({request}) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    try {
        const resp = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_MOVIE_API_KEY}&s=movie&page=${page}`);
        const movies = await resp.json();
        // console.log("getMovies", movies.Search);
        return { movies: movies || [], page: Number(page) };
    } catch (error) {
        console.log(error);
        return { movies: [], page: 1 };
    }
}