import { Link } from "react-router"

export const MovieCard = ({data}) => {
    // console.log(data.imdbID);
    return (
        <>
            <div className="col pb-4 ">
            <div className="card" style={{width: "14.5rem"}}>
                <img src={data.Poster} className="card-img-top" style={{ maxHeight: "335px"}} alt={data.imdbID} />
                <div className="card-body">
                    <h5 className="card-title">{data.Title.length <= 18 ? data.Title.slice(0,18) : data.Title.slice(0,18) +'..'}</h5>
                    <div className="row mb-4 mt-4">
                        <div className="col"><span className="badge text-bg-info">  <b>Type:</b> {data.Type}</span></div>
                        <div className="col"><span className="badge text-bg-success"><b>Year:</b> {data.Year}</span></div>
                    </div>
                    <Link to={`/mdetail/${data.imdbID}`} href="#" className="btn btn-primary w-100">Watch</Link>
                </div>
                </div>
            </div>
        </>
    )
}