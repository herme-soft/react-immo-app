import React from 'react'
import Link from "next/link"
import { priceFormatted } from './helpers'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow
}
from "mdbreact";

export const PropertySection = ({ properties }) => {

    const styles = {
        height: "220px"
    }

    return (
            <>
                <h2 className="h2-responsive font-weight-bold text-center mt-5 mb-4 globalColor">Notre catalogue</h2>  
 
                <MDBRow>
                    {properties && properties.map(property => (
                        <MDBCol md="4" lg="4" key={property._id}>
                            <MDBCard className="mb-4">
                                <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                    <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                        <img src={property.pictures[0]} alt={property.title} style={styles} className="catalogueImg" />
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

                <style jsx>
                    {
                        `.catalogueImg {
                            width: 100%;
                            object-fit: cover;
                            transform: scale(1.1);
                            transition: .2s ease-in-out;
                        }
                        
                        a.z-depth-2   {
                            display: block;
                            overflow: hidden;
                        }
                        
                        a.z-depth-2:hover .catalogueImg  {
                            transform: scale(1.5);
                            transition: .2s ease-in-out;
                        } 
                        `
                    }
                </style>

            </>
        )
   }





