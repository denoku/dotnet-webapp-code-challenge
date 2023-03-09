import React from "react";
import { Link, } from "react-router-dom";



function SiteNav(props) {
    //const navigate = useNavigate();





    return (

        <React.Fragment>
            <nav
                className="navbar navbar-expand-md navbar-dark bg-dark"
                aria-label="Fourth navbar example"
            >
                <div className="container ">
                    <a className="navbar-brand" href="/">

                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link
                                    to={"/"}
                                    className="nav-link px-2 text-white link-button">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={"/users"}
                                    className="nav-link px-2 text-white link-button">
                                    Users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={"/favorites"}
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    Favorite Users
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>

    )
}

export default SiteNav;