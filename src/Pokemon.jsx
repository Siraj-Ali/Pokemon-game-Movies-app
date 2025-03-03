import { useEffect, useState } from "react";
// import "./Pokemon.css";
import PokemonCard from "./UI/PokemonCard";
import { Loader } from "./components/layout/Loader";
import { useNavigate } from "react-router";
import axios from "axios";
import { fetchListDetails, fetchPokeList } from "./pokemonApiService/pokemonService";

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentUrl, setCurrentUrl] = useState('pokemon/?offset=24&limit=24');
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    // const API = 'https://pokeapi.co/api/v2/pokemon/?offset=24&limit=24';
    
    const fetchData = async (api) => {
        try {
            // Fetch data Using Javascript fetch function
            
            // const resp = await fetch(api);
            // const data = await resp.json();
            // const respData = data.results.map( async (currentUrl) => {  
            //     const resp = await fetch(currentUrl.url);
            //     const currentData = resp.json();
            //     return currentData;
            // });
            // const respPromisData = await Promise.all(data.results);
            
            // Fetch data Using Axios 
            // const {data} = await axios.get(api);

            // const respPromisData = await Promise.all(
            //     data.results.map(async (pokemon) => {
            //         const resp = await axios.get(pokemon.url);
            //         return resp.data;
            //     })
            // )

            // Fetch data creating services 
            const data = await fetchPokeList(api);
            const respPromisData = await fetchListDetails(data.results);
            console.log("Old Data ",pokemonData);
            console.log("New fetched ",respPromisData);
            setPokemonData(prevData => {
                const newData = [...prevData, ...respPromisData];
        
                // Deduplicate by using the `id` (assuming Pokémon have unique `id`)
                const uniqueData = Array.from(new Set(newData.map(a => a.id)))
                .map(id => newData.find(a => a.id === id));

                return uniqueData;
        });
            setNext(data.next);
            setPrev(data.previous);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData(currentUrl);
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // })
    }, [currentUrl]);
    
    
    if(loading) {
        return (
            <div style={{textAlign: "center"}}>
                <Loader />
            </div>
        )
    }
    if(error) {
        return (
            <div>
                <h2>{error.message}</h2>
            </div>
        )
    }
    console.log("pokemonData", pokemonData);
    // const searchPokemon = pokemonData;
    const searchPokemon = pokemonData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <section className="container">
            <header style={{textAlign:"center"}}>
                <h1> Lets Catch Pokémon</h1>
                </header>
                <div className="pokemon-search">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Pokemon" value={search} />
                </div>
                 
                  <div className="row">
                    {
                        // pokemonData.map((pokemon) => {
                            searchPokemon.map((pokemon) => {
                                console.log("Id",pokemon.id);
                            return  <PokemonCard key={pokemon.id} data={pokemon} />
                        })
                    }
                    </div>

                    <div className="row">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li onClick={() => setCurrentUrl(prev)}
                                 className="page-item"><a className="page-link" >Previous</a></li>
                                
                                <li onClick={() => setCurrentUrl(next)} className="page-item"><a className="page-link" >Next</a></li>
                            </ul>
                        </nav>
                    </div>
            </section>
        
    )
}

export default Pokemon; 