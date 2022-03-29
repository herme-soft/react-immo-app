import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import useAuth from "../auth/context"
import { useRouter } from "next/router"
import Link from "next/link"

export const Footer = () => {

  const {logout, user, isAuthenticated} = useAuth();
  const router = useRouter();

  const styles = {
    lineHeight: 3
  }

  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer className="text-md-left">
        <MDBRow className="mb-4">
          <MDBCol xl="3" lg="3" md="3" className="text-left">
            <Link href="/">
                <a>
                    <h1>
                        <span className="logoTitle text-uppercase">EchoTrade</span>
                        <span className="logoSubtitle">Spécialiste de l'immobilier</span>
                    </h1>
                </a>
              </Link>
              <ul className="list-unstyled">
                <li>8559 rue Ontario, Montréal</li>
                <li>(514) 555 5555</li>
                <li>Lundi - Vendredi, 8:00 - 20:00</li>
                <li>info@gmail.com</li>
                <li>echotrade@gmail.com</li>
              </ul>
          </MDBCol>

          <MDBCol xl="3" lg="3" md="3" className="text-left col-center">
            <h5 className="title">Menu</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/">
                    <a className="nav-link">
                      Home
                    </a>
                </Link>
              </li>
              <li>
                  {
                    isAuthenticated && user.role === "admin" && (
                        <Link href="/property/list" passHref>
                            <a className="nav-link">
                                Dashboard
                            </a>
                        </Link>
                    )  
                  }
              </li>
              <li>
                <Link href="/properties" passHref>
                    <a className="nav-link">
                        Liste des biens
                    </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                    <a className="nav-link">
                        Contact
                    </a>
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol xl="3" lg="3" md="3" className="text-left">
            <h5 className="title">General</h5>
            <ul className="list-unstyled">
              <li>Politique de confidentialité</li>
              <li>Éthique Professionnelle</li>
              <li>Conditions d'utilisation</li>
            </ul>
          </MDBCol>

          <MDBCol xl="3" lg="3" md="3" className="text-left">
            <h5 className="title">Suivez-nous</h5>
            <ul className="socials list-unstyled d-flex">
              <li className="mr-2">
                <Link href="https://www.facebook.com/">
                  <a target="_blank">
                    <MDBIcon fab icon="facebook-f" style={styles} />
                  </a>
                </Link>
              </li>

              <li className="mr-2">
                <Link href="https://www.linkedin.com/">
                  <a target="_blank">
                    <MDBIcon fab icon="linkedin-in" style={styles} />
                  </a>
                </Link>
              </li>

              <li className="">
                <Link href="https://www.instagram.com/">
                  <a target="_blank">
                    <MDBIcon fab icon="instagram" style={styles} />
                  </a>
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> EchoTrade.com </a>
        </MDBContainer>
      </div>
      
      <style jsx>
            {
                `h5 {
                  font-weight: 400;
                }
                
                ul {
                  color: rgba(255,255,255,0.6);
                }

                ul li a {
                  padding: 0;
                  color: rgba(255,255,255,0.6);
                }

                h1 span {
                  display: block;
                }

                h1 .logoTitle {
                  font-size: 1.2rem;
                  font-weight: 600;
                  -webkit-text-stroke: 1px #fff;
                  font-family: arial; 
                  color: #161616;
                  letter-spacing: 0.1550rem;
                  margin-bottom: 0.1rem;
                }
                
                h1 .logoSubtitle {
                    font-size: 0.7250rem;
                    letter-spacing: 0.0250rem;
                    color: #fff;
                }

                ul li a:hover {
                  color: rgba(255,255,255,0.8);
                }

                .socials li {
                  padding: 0.3rem;
                  background: #2c2c2c;
                  height: 2.2rem;
                  width: 2.2rem;
                  border-radius: 100%;
                  font-size: 1.2rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }

                .socials li:hover {
                  padding: 0.3rem;
                  background: #474646;
                  cursor: pointer;
                }

                .socials li a:hover {
                  font-size: 1.2rem;
                  color: rgba(255, 255, 255, 0.6);
                }
                
                .footer-copyright {
                  font-size: 0.8450rem;
                }`
            }    
        </style>
    </MDBFooter>
  );
}

