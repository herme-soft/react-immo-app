import React from 'react'
import Link from "next/link"
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter,
    MDBCol,
    MDBRow,
    MDBCardImage
} from "mdbreact"
import { priceFormatted } from './helpers'

export const CardRelated = ({ properties }) => {
    return (
        <MDBRow>
            {
                properties && properties.map(property => (
                    <MDBCol className="mb-3" md="4" lg="4" key={property._id}>
                        <MDBCard className="bdCard">
                            <MDBCardHeader>
                               {property.title}
                            </MDBCardHeader>
                            {/* <img
                                src={property.pictures[0]}
                                className="globalImg bdRadius"
                            /> */}
                             <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                                <a className="rounded z-depth-2 mb-lg-0 mb-4">
                                    <img src={property.pictures[0]} alt={property.title} className="d-block w-100" />
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
        </MDBRow>
    )
}


