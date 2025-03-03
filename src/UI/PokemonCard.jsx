import { Link } from "react-router";

const PokemonCard = ({data}) => {
    return (
            <div className="col pb-4 ">
            <div className="pokemon-card" style={{width: "15rem"}}>
            <figure>
                <img src={data.sprites.other.dream_world.front_default} 
                                    alt={data.name} className="card-img-top pokemon-image" />
            </figure>
            {/* <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22287%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20287%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1953ec9666a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1953ec9666a%22%3E%3Crect%20width%3D%22287%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.6875%22%20y%3D%2296.20000038146972%22%3E287x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" /> */}
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <span className="badge badge-info">
                {
                        data.types.map((type) => {
                             return type.type.name
                        }).join(', ')
                    }
                </span>
            </div>
            <div className="row pt-2">
               <div className="col-4" style={{textAlign: "center"}}>               
                    <span className="badge text-bg-success">
                    {data.height}
                    </span>
                     <span className="badge text-bg-danger"> Height</span>
                </div>
                <div className="col-4" style={{textAlign: "center"}}>
                    <span className="badge text-bg-success">
                    {data.weight}
                    </span>
                    <span className="badge text-bg-danger"> Weight</span>
                </div>
                <div className="col-4" style={{textAlign: "center"}}>
                    <span className="badge text-bg-success">
                    {data.stats[5].base_stat}
                    </span>
                    <span className="badge text-bg-danger"> speed</span>
                </div>
            </div>
            {/* <div className="row pt-2 ">
               <div className="col-6" style={{textAlign: "center"}}>               
                    <span >
                    {data.base_experience}
                    </span>
                     <span> Experience:</span>
                </div>
                <div className="col-6" style={{textAlign: "center"}}>
                    <span >
                    {data.stats[1].base_stat}
                    </span><br></br>
                    <span> Attack:</span>
                </div>
                
            </div> */}
            <div className="card-body pt-4 w-100">
               <Link to={`/pdetail/${data.name}`}>
                <button className="btn btn-success w-100">More Info</button>
                </Link>
            </div>
            </div>
            </div>
        
    )
}

export default PokemonCard;