import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

export const Carousel = () => {
  return (
    //     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    //     <div class="carousel-inner">
    //     <div class="carousel-item active">
    //         <img src="https://res.cloudinary.com/beloved/image/upload/v1596933918/Udemy/ggspxfetcbf2zfyjtau8.jpg" class="d-block w-100" alt="..." />
    //     </div>
    //     <div class="carousel-item">
    //         <img src="https://res.cloudinary.com/beloved/image/upload/v1596933920/Udemy/rwfrbh4vrixlutijsfne.jpg" class="d-block w-100" alt="..." />
    //     </div>
    //     <div class="carousel-item">
    //         <img src="..." class="d-block w-100" alt="..." />
    //     </div>
    //     </div>
    //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //     </button>
    // </div>


<div id="carouselExampleIndicators" className="carousel slide carouselMain" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg" className="d-block w-100 carouselItems" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg" className="d-block w-100 carouselItems" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg" className="d-block w-100 carouselItems" alt="..." />
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
</div>



    // <MDBContainer>
    // <MDBCarousel
    // activeItem={1}
    // length={3}
    // showControls={true}
    // showIndicators={false}
    // className="z-depth-1"
    // slide
    // >
    // <MDBCarouselInner>
    //     <MDBCarouselItem itemId="1">
    //     {/* <MDBView>
    //         <img
    //         className="d-block w-100"
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
    //         alt="First slide"
    //         />
    //     </MDBView> */}
    //     <img src="https://res.cloudinary.com/beloved/image/upload/v1593635578/Agency/z23ok1wvc3sdkenitunx.jpg" class="d-block w-100" alt="..." />
    //     </MDBCarouselItem>
    //     <MDBCarouselItem itemId="2">
    //     {/* <MDBView>
    //         <img
    //         className="d-block w-100"
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
    //         alt="Second slide"
    //         />
    //     </MDBView> */}
    //     <img src="https://res.cloudinary.com/beloved/image/upload/v1594004282/Assets/asset_eocidz.jpg" class="d-block w-100" alt="..." />
    //     </MDBCarouselItem>
    //     <MDBCarouselItem itemId="3">
    //     {/* <MDBView>
    //         <img
    //         className="d-block w-100"
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
    //         alt="Third slide"
    //         />
    //     </MDBView> */}
    //     <img src="https://res.cloudinary.com/beloved/image/upload/v1594004148/Assets/Apt-Premium2-4-HD-15_m3ztht.jpg" class="d-block w-100" alt="..." />
    //     </MDBCarouselItem>
    // </MDBCarouselInner>
    // </MDBCarousel>
    // </MDBContainer>
  );
}

