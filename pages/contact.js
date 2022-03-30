import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import { Layout } from "../components/layout"

const ContactPage = () => {

    const styles = {
        fontSize: "1.4rem",
        color: "#fff",
        lineHeight: 2
    }

  return (
    <Layout footer>
        <section className="contact section">
            <MDBContainer>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contactez-nous
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                            <div className="form-header accent-1">
                                <h3 className="mt-2">
                                    Write to us:
                                </h3>
                            </div>
                            <p className="dark-grey-text">
                                We'll write rarely, but only the best content.
                            </p>
                            <div className="md-form">
                                <MDBInput
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="pencil-alt"
                                    label="Icon Prefix"
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text"
                                />
                            </div>
                            <div className="text-center">
                                <button id="btn-submit" className="btn btn-primary btn-lg bdRadius">Submit</button>
                            </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                // src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357585.076521621!2d-74.01048414282262!3d45.557699585064015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2zTW9udHLDqWFsLCBRQw!5e0!3m2!1sfr!2sca!4v1648582275991"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <button id="btn-location" className="btn btn-primary btn-contact accent-1 bd-radius">
                                    <MDBIcon icon="map-marker-alt" style={styles} />
                                </button>
                                <p>8559 rue Ontario, Montréal</p>
                                <p className="mb-md-0">Qc, Canada</p>
                            </MDBCol>

                            <MDBCol md="4">
                                <button id="btn-phone" className="btn btn-primary btn-contact accent-1 bd-radius">
                                    <MDBIcon icon="phone" style={styles} />
                                </button>
                                <p>(514) 854 6347</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                            </MDBCol>

                            <MDBCol md="4">
                                <button id="btn-email" className="btn btn-primary btn-contact accent-1 bd-radius">
                                    <MDBIcon icon="envelope" style={styles} />
                                </button>
                                <p>info@gmail.com</p>
                                <p className="mb-md-0">sale@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>

        <style jsx>
            {
                `#btn-submit {
                    background: #00695c !important;
                    padding: 0.8rem 2rem;
                }
                  
                #btn-location, #btn-phone, #btn-email {
                  background: #00695c !important;
                  width: 3rem;
                  height: 3rem;
                  padding: 0;
                }
                
                .btn-contact .fa {
                  font-size: 1.4rem !important;
                  color: #fff;
                  line-height: 2;
                }
                
                .contact p {
                    margin-bottom: 0 !important;
                }`
            }    
        </style>
    </Layout>
  );
}

export default ContactPage;