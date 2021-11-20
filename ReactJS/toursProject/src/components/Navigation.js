import { Link } from 'react-router-dom';

export default function Navigation(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
            <div className="container">
                <a className="navbar-brand" to="#"><img src="imgs/logo.png" alt="#" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="show-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agency">travel agency</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/story">share story</Link>
                        </li>
                        <li className="nav-item .search-container">
                            <Link className="nav-link search" to="#"><i className="fas fa-search"></i></Link>
                            <form>
                                <input type="search" />
                            </form>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><i className="far fa-user"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><i className="far fa-heart"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};