import { useLoaderData, useNavigate } from "react-router-dom"
import { Ratting } from "../UI/Ratting";

export const MovieDetail = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="container mt-5">
                <header>
                    
                    {/* <h1> {detailData.name} </h1> */}
                </header>
            <div className="row">
                {/* <!-- Product Images --> */}
                <div className="col-md-4 offset-1 mb-4 p-image card">
                    <img src={details.Poster} alt="Product" className="img-fluid rounded mt-2 product-image" id="mainImage" />
                    {/* <div className="d-flex justify-content-between">
                        <img src={detailData.sprites.back_default} alt="Thumbnail 1" className="thumbnail rounded active"  />
                        <img src={detailData.sprites.back_shiny} alt="Thumbnail 2" className="thumbnail rounded"  />
                        <img src={detailData.sprites.front_default} alt="Thumbnail 3" className="thumbnail rounded"  />
                        <img src={detailData.sprites.front_shiny} alt="Thumbnail 4" className="thumbnail rounded"  />
                    </div> */}
                </div>

                
                <div className="col-md-6 p-detail">
                    <h2 className="mb-2">{details.Title}</h2>
                    <p className="mb-2 detail-text">{details.Plot}</p>
                    <p className="text-muted mb-2 detail-text"><b>Languages:</b> <span className="badge text-bg-warning" style={{textAlign: "left",display: "inline"}}>{details.Language}</span></p>
                    <p className="text-muted mb-2 detail-text"><b>Director:</b> <span className="badge text-bg-danger" style={{textAlign: "left",display: "inline"}}>{details.Director}</span></p>
                    <p className="text-muted mb-2 detail-text"><b>Actors:</b> <span className="badge text-bg-info" style={{textAlign: "left",display: "inline"}}>{details.Actors}</span></p>
                    <p className="text-muted mb-2 detail-text"><b>Awards:</b> <span className="badge text-bg-success" style={{textAlign: "left",display: "inline"}}>{details.Awards}</span></p>
                    <p className="text-muted mb-2 detail-text"><b>Genre:</b> <span className="badge text-bg-dark" style={{textAlign: "left",display: "inline"}}>{details.Genre}</span></p>
                    <p className="text-muted mb-2 detail-text"><b>Writer:</b> <span className="badge text-bg-primary" style={{textAlign: "left",display: "inline"}}>{details.Writer}</span></p>
                    
                    <div className="mb-3 ml-2 detail-text">
                    <p className="text-muted"><b>Rating:</b>
                     <Ratting rate={details.imdbRating}/>
                     </p>
                     
                    </div>
                    <div className="row detail-row detail-box">
                        
                    {/* <div className="col"> */}
                    {/* <div className="mb-2"> */}
                        <div className="col-6 ">
                        <span> <b>Released: </b></span>
                            <span style={{color: "black"}}>
                            {details.Released}
                            </span>
                        </div>
                        <div className="col-6 ">
                        <span> Type: </span>
                            <span style={{color: "black"}}>
                            {details.Type}
                            </span>
                        </div>
                        <div className="col-6 ">
                        <span> Votes: </span>
                            <span style={{color: "black"}}>
                            {details.imdbVotes}
                            </span>
                        </div>
                        <div className="col-6 ">
                        <span> Runtime: </span>
                        <span style={{color: "black"}}>
                            {details.Runtime}
                            </span>
                        </div>
                    {/* </div>   */}
                    {/* </div> */}
                    </div>
                    
                    <button className="btn btn-primary btn-lg mt-4 me-2">
                             Watch Now
                        </button>
                        <button onClick={handleBack} className="btn btn-dark btn-lg mt-4 me-2">
                             Back
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