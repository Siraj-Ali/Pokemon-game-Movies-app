import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router"

export const Loader = () => {

    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col">
                <div className="card" aria-hidden="true">
                <div className="placeholder-glow">
                    <div className="loader-img placeholder col-12"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" aria-hidden="true">
                <div className="placeholder-glow">
                    <div className="loader-img placeholder col-12"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" aria-hidden="true">
                <div className="placeholder-glow">
                    <div className="loader-img placeholder col-12"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" aria-hidden="true">
                <div className="placeholder-glow">
                    <div className="loader-img placeholder col-12"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        
    )
}