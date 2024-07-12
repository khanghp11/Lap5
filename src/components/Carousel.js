export default function Carousel() {
    return (
        <section id="carousel-section" className="container my-3">
            <div id="carousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/Banner_1.jpg" className="d-block w-100" alt="Banner 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/Banner_2.jpg" className="d-block w-100" alt="Banner 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/Banner_3.jpg" className="d-block w-100" alt="Banner 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    ); 
}