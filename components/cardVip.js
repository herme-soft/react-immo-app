import React from 'react'
import Link from "next/link"
import { MDBCard, MDBCardImage } from "mdbreact"
import { priceFormatted } from './helpers'

export const CardVip = ({ properties }) => {
    return (
        <>
            {
              properties && properties.map(property => (
                <MDBCard className="mb-2" key={property._id}>
                    {/* <img 
                        src={property.pictures[0]} 
                        className="d-block w-100"
                        alt="" 
                    /> */}
                    <Link href="/property/[slug]" as={`/property/${property.slug}`}>
                        <a className="rounded z-depth-2 mb-lg-0 mb-4">
                            <img src={property.pictures[0]} alt={property.title} className="d-block w-100" />
                        </a>
                    </Link>
                    <div className="imgTop">
                        <button className="d-inline-flex vedette">En Vedette</button>
                        <button className="d-inline-flex exclu">Exclusivité</button>
                    </div>
                    <div className="price">
                        {priceFormatted(property.price)}
                    </div>
                </MDBCard>
              ))  
            }
            <style jsx>
                {`
                    .imgTop {
                        position: absolute;
                        top: 10px;
                        left: 5px;
                    }

                    .vedette {
                        background-color: #00695c;
                        color: white;
                        text-transform: capitalize;
                        font-size: 10px;
                        font-weight: bolder;
                        border: 0px;
                        margin-right: 5px;
                    }

                    .exclu {
                        border: 0px;
                        background-color: red;
                        color: white;
                        font-weight: bolder;
                        text-transform: capitalize;
                        font-size: 10px;
                    }

                    .price {
                        position: absolute;
                        bottom: 5px;
                        left: 16px;
                        font-weight: bold;
                        color: white;
                    }
                `}
            </style>
        </>
    )
}


