import React from 'react'
import {
    MDBDataTableV5,
    MDBIcon,
    MDBView
} from "mdbreact"
import { AdminRoute } from "../../auth/adminRoutes"
import { Layout } from "../../components/layout"
import api from "../../auth/axios"
import useSWR from "swr"
import Moment from "react-moment"
import { priceFormatted } from '../../components/helpers'
import { MDBContainer } from "mdbreact";

const fetcher = url => api.get(url).then(res => res.data)

const PropertyList = () => {

    const {data} = useSWR("/api/properties?limit=50", fetcher);
    const properties = data && data.data;


    const datatable = {
        columns: [
           {
               label: "Titre",
               field: "title",
               sort: "asc"
           }, 
           {
               label: "Description",
               field: "description",
               sort: "asc"
           }, 
           {
               label: "Prix",
               field: "price",
               sort: "asc"
           } 
        ],
        rows: properties && properties.map(property => {
            return {
                title: property.title,
                description: property.description.slice(0,200),
                price: property.price
            }
        })
    }

    return (
        <Layout>
            <section className="list section">
                <MDBContainer>
                    <MDBDataTableV5 
                        data={datatable}
                        entries={5}
                        pageAmount={4}
                        paginTop
                        searchTop
                        searchBottom={false}
                    />
                </MDBContainer>
            </section>
        </Layout>
    )
}

export default AdminRoute(PropertyList);





// import React from "react";
// import { MDBContainer, MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
// import { AdminRoute } from "../../auth/adminRoutes";
// import { Layout } from "../../components/layout";
// import useSWR from "swr";
// import api from "../../auth/axios";
// import Moment from "react-moment";
// import { priceFormatted } from "../../components/helpers";
// import useAuth from "../../auth/context";
// const fetcher = (url) => api.get(url).then((res) => res.data.data);
// const PropertyList = () => {
//  const { user } = useAuth();
//  const { data: properties } = useSWR("/api/properties?limit=30", fetcher);
//  const styles = {
//  forcedInline: {
//  display: "inline",
//  width: "10px",
//  height: "100px",
//  },
//  iconTrue: {
//  color: "#2BBBAD",
//  },
//  iconFalse: {
//  color: "red",
//  },
//  };
//  const datatable = {
//  columns: [
//  {
//  label: "Titre",
//  field: "title",
//  sort: "asc",
//  },
//  {
//  label: "Cat??gorie",
//  field: "category",
//  sort: "asc",
//  },
//  {
//  label: "Description",
//  field: "description",
//  sort: "asc",
//  },
//  {
//  label: "Prix",
//  field: "price",
//  sort: "asc",
//  },
//  {
//  label: "Image",
//  field: "pictures",
//  sort: "asc",
//  },
//  {
//  label: "vendu",
//  field: "sold",
//  sort: "asc",
//  },
//  {
//  label: "Vip",
//  field: "vip",
//  sort: "asc",
//  },
//  {
//  label: "Date_de_creation",
//  field: "createdAt",
//  sort: "asc",
//  },
//  {
//  label: "Actions",
//  field: "action",
//  },
//  ],
//  rows:
//  properties &&
//  properties.map((property) => {
//  return {
//  title: property.title,
//  description: <div>{property.description.slice(0, 200)}</div>,
//  price: priceFormatted(property.price),
//  category: property.category.name,
//  pictures: property && (
//  <MDBView hover zoom waves>
//  <img
//  src={property.pictures[0]}
//  alt="Premier slide"
//  width={120}
//  height={80}
//  />
//  </MDBView>
//  ),
//  sold:
//  (property.sold === false && (
//  <div className="text-center">
//  <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
//  </div>
//  )) ||
//  (property.sold === true && (
//  <div className="text-center">
//  <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
//  </div>
//  )),
//  vip:
//  (property.vip === false && (
//  <div className="text-center">
//  <MDBIcon far icon="thumbs-down" style={styles.iconFalse} />
//  </div>
//  )) ||
//  (property.vip === true && (
//  <div className="text-center">
//  <MDBIcon far icon="thumbs-up" style={styles.iconTrue} />
//  </div>
//  )),
//  createdAt: (
//  <Moment format="DD/MM/YYYY ?? HH:mm:ss">{property.createdAt}</Moment>
//  ),
//  action: (
//  <div>
//  <div className="text-center">
//  <MDBIcon far icon="eye" />
//  </div>
//  </div>
//  ),
//  };
//  }),
//  };
//  return (
//  <>
//  {user && user.role === "admin" && (
//  <Layout>
//  <MDBContainer fluid>
//  <MDBDataTableV5
//  hover
//  entriesOptions={[5, 10, 15, 20, 30]}
//  entries={5}
//  pagesAmount={4}
//  data={datatable}
//  pagingTop
//  entriesLabel="Biens par page"
//  infoLabel={["Affiche", "??", "de", "biens"]}
//  searchTop
//  searchBottom={false}
//  />
//  </MDBContainer>
//  </Layout>
//  )}
//  </>
//  );
// };
// export default AdminRoute(PropertyList);