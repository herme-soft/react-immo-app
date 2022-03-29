import React, { useState } from "react";
import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle, 
    MDBDropdownMenu, 
    MDBDropdownItem, 
    MDBIcon,
    MDBContainer
} from "mdbreact";
import Link from "next/link"
import useAuth from "../auth/context"
import { useRouter } from "next/router"


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {logout, user, isAuthenticated} = useAuth();
    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MDBNavbar color="default-color-dark" expand="md" dark>
            <MDBContainer>
                <MDBNavbarBrand className="mr-5">
                    <Link href="/">
                        <a>
                            <h1 className="mb-0">
                                <span className="logoTitle text-uppercase">EchoTrade</span>
                                <span className="logoSubtitle">Spécialiste de l'immobilier</span>
                            </h1>
                        </a>
                    </Link>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={handleToggle} />

                <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
                    <MDBNavbarNav left>
                        <MDBNavItem active={router.pathname === "/"}>
                            <Link href="/">
                                <a className="nav-link">
                                    <MDBIcon icon="home" className="mr-1" /> Home
                                </a>
                            </Link>
                        </MDBNavItem>

                        <MDBNavItem active={router.pathname === "/properties"}>
                            <Link href="/properties" passHref>
                                <a className="nav-link">
                                    Liste des biens
                                </a>
                            </Link>
                        </MDBNavItem>
                        {
                            isAuthenticated && user.role === "admin" && (
                                <MDBNavItem active={router.pathname === "/property/list"}>
                                    <Link href="/property/list" passHref>
                                        <a className="nav-link">
                                            Dashboard
                                        </a>
                                    </Link>
                                </MDBNavItem>
                            )  
                        }
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem active={router.pathname === "/contact"}>
                            <Link href="/contact">
                                <a className="nav-link">
                                    <MDBIcon icon="address-book" className="mr-1" />
                                    Contact
                                </a>
                            </Link>
                        </MDBNavItem>
                        {
                            !isAuthenticated && (
                                    <MDBNavItem active={router.pathname === "/login"}>
                                        <Link href="/login">
                                            <a className="nav-link">
                                                <MDBIcon icon="user-alt" className="mr-1" />
                                                Connexion
                                            </a>
                                        </Link>
                                    </MDBNavItem>
                            ) 
                        }

                        {
                            isAuthenticated && (
                                <>
                                    <MDBNavItem>
                                        <div className="nav-link">
                                            <MDBIcon icon="user-alt" className="mr-1" />
                                            Bonjour {user.username}
                                        </div>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <div className="nav-link" onClick={logout}>
                                            <MDBIcon icon="power-off" className="mr-1" />
                                            Deconnexion
                                        </div>
                                    </MDBNavItem>
                                </>
                            )
                        }
                        
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
            <style jsx>
                {
                    `
                    h1 span {
                        display: block;
                    }

                    h1 .logoTitle {
                        font-size: 1.2rem;
                        font-weight: 600;
                        -webkit-text-stroke: 1px #fff;
                        font-family: arial; color: #00695c;
                        letter-spacing: 0.1550rem;
                        margin-bottom: 0.1rem;
                    }
                    h1 .logoSubtitle {
                        font-size: 0.7250rem;
                        letter-spacing: 0.0250rem;
                        color: #fff;
                    }
                    `
                }
            </style>
        </MDBNavbar>
    )
}


