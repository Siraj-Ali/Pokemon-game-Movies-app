import { Link, useNavigate, useRouteError } from "react-router";
import "./NotFound.module.css";
export const NotFound = () => {
	const error  = useRouteError();
	console.log(error);
	const navigate = useNavigate();
	// console.log(navigate);
	const handleGoBack = () => {
		navigate(-1);
	}
	if(error.status === 404) {
		return (
			<>
				<div className="container-fluid notfound-main">
					<div className="row d-flex justify-content-center align-items-center height-vh">
	
	
					<div className="col-lg-6 col-12">
	
						<div className="col-12 d-flex flex-column justify-content-center align-items-center">
							<h1 className="main-heading">404</h1>
							<h2>we couldn't find this page.</h2>
							<div className="text-center mt-4 mb-5">
							<Link to='/'><button className="btn btn-success px-3 mr-2"><i className="fa fa-home"></i> Home</button></Link>
								<Link to='/contact'> <button className="btn btn-success px-3 mr-2"><i className="fa fa-phone"></i> Contact</button></Link>
							</div>
							<div className="text-center">
								<button onClick={handleGoBack} className="btn btn-dark px-3 mr-2"><i className="fa fa-back"></i> Go Back</button>
							</div>
						</div>
	
					</div>
	
	
					</div>
				</div>
			</>
		)

	}

	return <div className="text-center"><h2>The page you are looking for is does not exist..</h2></div>
    
}