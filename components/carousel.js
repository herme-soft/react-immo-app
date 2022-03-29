import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBContainer } from
"mdbreact";

export const Carousel = () => {
  return (
    <MDBContainer fluid className="p-0">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg"
                alt="First slide"
              />
            <MDBMask overlay="black-light" />

            <MDBCarouselCaption>
              <h3 className="h3-responsive">Appartements Grand Standing</h3>
              <p>Offre Promotionnelle de -30% sur les Appartements</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="2">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg"
                alt="Second slide"
              />
            <MDBMask overlay="black-strong" />

            <MDBCarouselCaption>
              <h3 className="h3-responsive">Luxueux Loft avec vue imprenable</h3>
              <p>Promotion Loft -40% sur les ventes estivales</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg"
                alt="Third slide"
              />
            <MDBMask overlay="black-slight" />

            <MDBCarouselCaption>
              <h3 className="h3-responsive">Cottage 2 Étages en bord de mer</h3>
              <p>-35% de réduction sur le prix des Cottages</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

