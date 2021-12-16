import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from "../components/layout"
import api from "../auth/axios"
import { PropertyVip } from "../components/propertyVip"
import { MDBContainer } from "mdbreact"
import { Carousel } from "../components/carousel"
import { PropertySection } from '../components/propertySection'
import { Features } from "../components/features"

export default function Home({ propertiesVip, properties }) {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </Head>

    <Layout footer>
      <Carousel />
      {/* {JSON.stringify(propertiesVip)} */}
      <MDBContainer>
          {/* du composant propertyVip, on passe en props propertiesVip via la props */}
          <PropertyVip properties={propertiesVip} /> 
          <PropertySection properties={properties} />
          <Features />
      </MDBContainer>
    </Layout>
    </>
  )
}

export const getStaticProps = async() => {
  const {data: propertiesVip} = await api.get("/api/properties/vip");
  const {data} = await api.get("/api/properties?limit=6");
  const properties = data.data

  return {
    props: {
      propertiesVip,
      properties
    }
  }
}