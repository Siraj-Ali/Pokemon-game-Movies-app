import { useEffect, useState } from "react";
// import "./../assets/Details.css"
import { useNavigate, useParams } from "react-router";
const PokemonDetails = () => {
    const {name} = useParams();
    const [detailData, setDetailData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const API = 'https://pokeapi.co/api/v2/pokemon/';
// console.log(param);
    const fetchDetail = async () => {
        try {
            const resp = await fetch(API+name);
            const data = await resp.json();
            // console.log(data);
            setDetailData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchDetail()
    }, []);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    if(loading) {
        return (
            <div className="error">
            <h2>Loading..</h2>
        </div>
        )
    }
    if(error) {
        <div className="error">
            <h2>{error.message}</h2>
        </div>
    }
    return (
        <>
            <div className="container mt-5">
                <header>
                    
                    {/* <h1> {detailData.name} </h1> */}
                </header>
            <div className="row">
                {/* <!-- Product Images --> */}
                <div className="col-md-6 mb-4 p-image card">
                    <img src={detailData.sprites.other.dream_world.front_default} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" />
                    <div className="d-flex justify-content-between">
                        <img src={detailData.sprites.back_default} alt="Thumbnail 1" className="thumbnail rounded active"  />
                        <img src={detailData.sprites.back_shiny} alt="Thumbnail 2" className="thumbnail rounded"  />
                        <img src={detailData.sprites.front_default} alt="Thumbnail 3" className="thumbnail rounded"  />
                        <img src={detailData.sprites.front_shiny} alt="Thumbnail 4" className="thumbnail rounded"  />
                    </div>
                </div>

                
                <div className="col-md-6 p-detail">
                    <h2 className="mb-3">P{detailData.name}</h2>
                    <p className="text-muted mb-4 detail-text">ID: 00{detailData.id}</p>
                    <p className="mb-4 detail-text">Experience premium sound quality and industry-leading noise cancellation with these wireless
                        headphones. Perfect for music lovers and frequent travelers.</p>
                    {/* <div className="mb-3 detail-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <span className="ms-2">4.5 (120 reviews)</span>
                    </div> */}
                    <div className="row detail-row">
                        
                    {/* <div className="col"> */}
                    {/* <div className="mb-2"> */}
                        <div className="col-6 text-center">
                        <span> Weight</span><br></br>
                            <span >
                            {detailData.weight}
                            </span>
                        </div>
                        <div className="col-6 text-center">
                        <span> Height</span><br></br>
                            <span >
                            {detailData.height}
                            </span>
                        </div>
                        <div className="col-6 text-center">
                         <span> Speed</span><br></br>
                            <span >
                            {detailData.stats[5].base_stat}
                            </span>
                        </div>
                        <div className="col-6 text-center">
                        <span> Experience</span><br></br>
                            <span >
                            {detailData.base_experience}
                            </span>
                        </div>
                        <div className="col-6 text-center">
                        <span> Attack</span><br></br>
                            <span >
                            {detailData.stats[1].base_stat}
                            </span>
                        </div>
                        <div className="col-6 text-center text-bg-danger">
                        <span> Abilities</span><br></br>
                            <span className="text-black">
                            {
                                detailData.abilities.map((abilitInfo) => abilitInfo.ability.name)
                                .slice(0,1)
                                .join(',')
                            }
                            </span>
                        </div>
                    {/* </div>   */}
                    {/* </div> */}
                    </div>
                    
                    <div className="mb-4 detail-text">
                    </div>
                    {/* <button className="btn btn-primary btn-lg mb-3 me-2">
                            <i className="bi bi-cart-plus"></i> Add to Cart
                        </button> */}
                    <button className="btn btn-outline-secondary btn-lg mb-3">
                            <i className="bi bi-heart"></i> Add to Wishlist
                        </button>
                        <button onClick={handleBack} className="btn btn-dark btn-lg mb-3">
                            <i className="bi bi-back"></i> Go Back
                        </button>
                    <div className="mt-4">
                        <h5>Key Features:</h5>
                        <ul>
                            <li>Industry-leading noise cancellation</li>
                            <li>30-hour battery life</li>
                            <li>Touch sensor controls</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default PokemonDetails;