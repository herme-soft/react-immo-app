import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask } from "mdbreact";

export const CardCarousel = ({ property }) => {

    const styles = {
        height: 400
    }

  return (
    <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
    >
        <MDBCarouselInner style={styles}>
            <MDBCarouselItem itemId="1">
                {
                    property && property.pictures[0] ? (
                        <img src={property.pictures[0]} className="carouselItems carousel-image" alt="..." />
                    ) : null
                }
            </MDBCarouselItem>
            
            <MDBCarouselItem itemId="2">
                {
                    property && property.pictures[1] ? (
                        <img src={property.pictures[1]} className="carouselItems carousel-image" alt="..." />
                    ) : null
                }
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
                {
                    property && property.pictures[2] ? (
                        <img src={property.pictures[2]} className="carouselItems carousel-image" alt="..." />
                    ) : null
                }
            </MDBCarouselItem>
        </MDBCarouselInner>

        <style jsx>
            {
                `@media (min-width: 768px) {
                    .myCarousel {
                        width: 100%;
                    }

                    .carousel-image {
                        width: 100%;
                        height: 400px;
                        object-fit: cover;
                        display: block;
                    }
                }
                `
            }
        </style>
    </MDBCarousel>
  );
}

