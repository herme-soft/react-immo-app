import React from 'react'
import { priceFormatted } from './helpers'
import Link from "next/link"
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow,
    MDBView
}
from "mdbreact";

export const PropertyVip = ({ properties }) => {

    const styles = {
        height: "220px"
    }

    return (
            <>
                <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Biens sponsorisés</h2>  
                {/* <MDBRow>
                    {properties && properties.map(property => (
                        <MDBCol md="4" lg="4">
                            <MDBView zoom>
                                <img src={property.pictures[0]} alt={property.title} />
                            </MDBView>
                            <MDBCardBody>
                                <MDBCardTitle>{property.title}</MDBCardTitle>
                                <MDBCardText>
                                    <strong>{property.price}</strong>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    ))}
                </MDBRow>  */}

     
                <MDBRow>
                    {properties && properties.map(property => (
                        <MDBCol md="4" lg="4" key={property._id}>
                            <MDBCard>
                                <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                    <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                        <img src={property.pictures[0]} alt={property.title} style={styles} className="globalImgCard" />
                                    </a>
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>{property.title}</MDBCardTitle>
                                    <MDBCardText>
                                        <strong>{priceFormatted(property.price)}</strong>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow> 

                <style jsx>
                    {
                        `.globalImgCard {
                            width: 100%;
                            object-fit: cover;
                            transform: scale(1.1);
                            transition: .2s ease-in-out;
                        }
                        
                        a.z-depth-2   {
                            display: block;
                            overflow: hidden !important;
                            border-top-left-radius: 0 !important;
                            border-top-right-radius: 0 !important;
                            border-bottom-left-radius: 0 !important;
                            border-bottom-right-radius: 0 !important;
                        }
                        
                        a.z-depth-2:hover .globalImgCard  {
                            transform: scale(1.5) !important;
                            transition: .2s ease-in-out;
                        } 
                        `
                    }
                </style>
            </>
        )
   }





