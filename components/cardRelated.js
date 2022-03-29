import React from 'react'
import Link from "next/link"
import {
    MDBCard,
    MDBCardHeader,
    MDBCardFooter,
    MDBCol,
    MDBRow,
} from "mdbreact"
import { priceFormatted } from './helpers'

export const CardRelated = ({ properties }) => {
    return (
        <MDBRow>
            {
                properties && properties.map(property => (
                    <MDBCol className="mb-3" md="4" lg="4" key={property._id}>
                        <MDBCard className="mb-3">
                            <MDBCardHeader>
                               {property.title}
                            </MDBCardHeader>
                             <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                    <img src={property.pictures[0]} alt={property.title} className="similarImgCard d-block w-100" />
                                </a>
                            </Link>
                            <MDBCardFooter>
                                <div className="globalColor">
                                    {priceFormatted(property.price)}
                                </div>
                                <p>
                                    <small>{property.city}, Monde</small>
                                </p>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                ))
            }

            <style jsx>
                {
                    `.similarImgCard {
                        height: 210px;
                        width: 100%;
                        object-fit: cover;
                        transform: scale(1.1);
                        transition: .2s ease-in-out;
                    }

                    .similarImgCard {
                        width: 100%;
                        object-fit: cover;
                        transform: scale(1.1);
                        transition: .2s ease-in-out;
                    }
                    
                    a.z-depth-2   {
                        display: block;
                        overflow: hidden;
                    }
                    
                    a.z-depth-2:hover .similarImgCard  {
                        transform: scale(1.5);
                        transition: .2s ease-in-out;
                    }
                    `
                }
            </style>
        </MDBRow>
    )
}


