import React from 'react'
import { Layout } from "../components/layout"
import { Card } from "../components/card"
import api from "../auth/axios"
import { MDBContainer } from "mdbreact"
import { useRouter } from "next/router"
import ReactPaginate from 'react-paginate'
import { SearchFilter } from "../components/searchFilter"

const Properties = ({ properties, currentPage, pageCount }) => {

    const router = useRouter();

    /** Pagination (necessite useRouter et ReactPaginate) ********************** */
    const paginationHandler = (page) => {
      const currentPath = router.pathname;
      const currentQuery = {...router.query};
      currentQuery.page = page.selected + 1;

      router.push({
        pathname: currentPath,
        query: currentQuery
      }).then(() => window.scrollTo(0,0))
    }

    return (
        <Layout footer>
            <MDBContainer>
                {/* {JSON.stringify(properties)} */}
                <SearchFilter />
                <Card properties={properties} />
                <div className="paginateCenter">
                    <ReactPaginate
                      onPageChange={paginationHandler} 
                      initialPage={currentPage -1} 
                      pageCount={pageCount}
                      marginPagesDisplay={2}
                      pageRangeDisplayed={5}
                      previousLabel="Precedent"
                      nextLabel="Suivant"
                      activeClassName="activated"
                      breackLabel="..."
                      pageClassName="paginate"
                      containerClassName="custom-paginate"
                    />
                </div>
            </MDBContainer>
        </Layout>
    )
}

export const getServerSideProps = async({ query }) => {
    const page = query.page || 1  /** retourne le query de la page ou si le query n'existe pas, il retourne la première page */
    const {data} = await api.get(`/api/properties?page=${page}`);
    const properties = data.data;
    const currentPage = data.currentPage;
    const pageCount = data.totalPages;
  
    return {
      props: {
        properties,
        currentPage,
        pageCount
      }
    }
  }

export default Properties;
