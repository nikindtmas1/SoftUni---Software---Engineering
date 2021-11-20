export default function Navigation(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="imgs/logo.png" alt="#" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="show-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/agency">travel agency</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/story">share story</a>
                        </li>
                        <li className="nav-item .search-container">
                            <a className="nav-link search" href="#"><i className="fas fa-search"></i></a>
                            <form>
                                <input type="search" />
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-user"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-heart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};