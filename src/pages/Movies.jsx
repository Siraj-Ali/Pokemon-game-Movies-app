import { useLoaderData, useNavigate } from "react-router"
import { MovieCard } from "../UI/MovieCard"

export const Movies = () => {
    const {movies, page} = useLoaderData();
    
    const navigate = useNavigate();

    const handlePageChange = (newPage) => {
        navigate(`?page=${newPage}`);
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
        });
    };
    return (
        <>
          <section className="container">
          <header style={{textAlign:"center"}}>
                <h1> Movies</h1>
                </header>
            <div className="row">
                {movies ? (
                    movies.Search.map((movie) => <MovieCard key={movie.imdbID} data={movie} />)
                ) : (
                    <p>No movies found</p>
                )
                    
                }
              
            </div>

            <div className="row">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1} className="page-item"><a className="page-link" >Previous</a></li>
                    
                    <li onClick={() => handlePageChange(page + 1)} className="page-item"><a className="page-link" >Next</a></li>
                </ul>
            </nav>
            </div>
          </section>
            
        </>
    )
}