import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link"

export const Card = ({ properties }) => {

    const styles = {
        padding: "0.5rem"
    }

  return (
      <>
        {
            properties && properties.map(property => (
                <MDBCard className="p-2 my-3" key={property._id}>
                    <MDBCardBody style={styles}>
                        <MDBRow>
                            <MDBCol lg="5">
                                <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                    <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                        <img src={property.pictures[0]} alt={property.title} className="listImg" />
                                    </a>
                                </Link>
                            </MDBCol>
                                        
                            <MDBCol lg="7">
                                <span className="globalColor">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="university" className="pr-2" />
                                        {property.category.name}
                                    </h6>
                                </span>

                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>{property.title}</strong>
                                </h3>

                                <p>
                                    {property.description.slice(0, 200)}
                                </p>

                                <p className="globalColor">
                                    <strong>{priceFormatted(property.price)}</strong>
                                </p>

                                <p className="globalColor">
                                    <MDBIcon icon="city" className="mr-1" />
                                    <strong>{property.city}</strong>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            ))
        }

        <style jsx>
            {
                `.listImg {
                    height: 250px;
                    width: 100%;
                    object-fit: cover;
                    transform: scale(1.1);
                    transition: .2s ease-in-out;
                }

                .listImg {
                    width: 100%;
                    object-fit: cover;
                    transform: scale(1.1);
                    transition: .2s ease-in-out;
                }
                  
                a.z-depth-2   {
                    display: block;
                    overflow: hidden;
                }
                  
                a.z-depth-2:hover .listImg  {
                    transform: scale(1.5);
                    transition: .2s ease-in-out;
                }
                `
            }
        </style>
    </>
  );
}

