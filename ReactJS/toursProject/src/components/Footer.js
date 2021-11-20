export default function Footer(){
    return (
    <footer>
            <div className="container">
                <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">Contact us</h4>
                            <p className="address">
                                123 Second Street Fifth <br />
                                Avenue,<b />
                                Manhattan, New York<br />
                                +987 654 3210
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">additional links</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item date">
                            <h4 className="text-uppercase">resent posts</h4>
                            <p><a href="#">01/03/2019</a></p>
                            <p><a href="#">08/05/2019</a></p>
                            <p><a href="#">01/03/2019</a></p>
                            <p><a href="#">08/05/2019</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">newsletter</h4>
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center">
                <p>Copyright 2019  Design by <a href="https://html.design">Free Html Templates</a></p>
            </div>
        </footer>
        
    );

};