export default function Service(){
    return (
        <div className="services" id="service">
            <div className="container">
                <h2 className="text-capitalize">Enjoy <span>Resort</span></h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a o</p>
            </div>
            <div className="small-container">
                <div id="slideToNext" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="imgs/pic4.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="imgs/pic3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="imgs/pic2.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#slideToNext" role="button" data-slide="prev">
                    <i className="fas fa-chevron-left fa-2x"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#slideToNext" role="button" data-slide="next">
                    <i className="fas fa-chevron-right fa-2x"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
        </div>
    );
};