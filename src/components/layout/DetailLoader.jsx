import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router"

export const DetailLoader = () => {
    return (
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-4 offset-1">
                <div className="card" aria-hidden="true">
                <div className="placeholder-glow">
                    <div className="loader-img placeholder col-12"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-0" aria-hidden="true">
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