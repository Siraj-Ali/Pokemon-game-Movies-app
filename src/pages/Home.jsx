import { Link } from "react-router"

export const Home = () => {
    return (
        <section className="container pb-5">
          <header style={{textAlign:"center"}}>
                <h2> Let's Explore Pokemons & Movies </h2>
            </header>
            <div className="row main-row">
             <div className="col pb-4 offset-1">
                    <div className="card main-card" >
                        <img src="./pokemon-card.png" className="card-img-top main-card-img-top"  alt="" />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <Link to="/pokemon" href="#" className="btn btn-danger w-100">Explore</Link>
                        </div>
                        </div>
                </div>
                <div className="col pb-4 ">
                    <div className="card main-card" >
                        <img src="./movies.png" className="card-img-top main-card-img-top"  alt="" style={{backgroundColor: "black"}} />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <Link to="/movies" href="#" className="btn btn-danger w-100">Explore</Link>
                        </div>
                        </div>
                </div>
                </div>
            </section>
    )
}