import React from "react";

export const CardCarousel = ({ property }) => {

  return (
        <div id="carouselExampleIndicators" className="carousel slide carouselMain myCarousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {
                        property && property.pictures[0] ? (
                            <img src={property.pictures[0]} className="carouselItems carousel-image" alt="..." />
                        ) : null
                    }
                </div>
            
                <div className="carousel-item">
                    {
                        property && property.pictures[1] ? (
                            <img src={property.pictures[1]} className="carouselItems carousel-image" alt="..." />
                        ) : null
                    }
                </div>
                <div className="carousel-item">
                    {
                        property && property.pictures[2] ? (
                            <img src={property.pictures[2]} className="carouselItems carousel-image" alt="..." />
                        ) : null
                    }
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <style jsx>
                {
                    `@media (min-width: 768px) {
                        .myCarousel {
                            width: 100%;
                        }
                        .carousel-image {
                            width: 100%;
                            height: 500px;
                            object-fit: cover;
                            display: block;
                        }
                    }

                    @media (max-width: 768px) {
                        .myCarousel {
                            width: 100%;
                        }
                        .carousel-image {
                            width: 100%;
                            height: 300px;
                            object-fit: cover;
                            display: block;
                        }
                    }
                    
                    `
                }
            </style>
        </div>
  );
}

