import React from 'react'
import Link from "next/link"
import { priceFormatted } from './helpers'
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

export const PropertySection = ({ properties }) => {
    return (
            <>
                <h2 className="h2-responsive font-weight-bold text-center mt-5 mb-4 globalColor">Notre catalogue</h2>  
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
                            <MDBCard className="mb-4">
                                {/* <div>
                                    <img src={property.pictures[0]} alt={property.title} className="globalImg bdRadius" />
                                </div> */}
                                <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                    <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                        <img src={property.pictures[0]} alt={property.title} className="globalImgCard" />
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
                <div className="text-center">
                    <button className="globalButton">
                        Afficher plus
                    </button>
                </div>
                <hr className="my-5" />
            </>
        )
   }





