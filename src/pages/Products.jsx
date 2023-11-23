/* eslint-disable no-unused-vars */
import React from "react"
import Filter from "../components/Filter"
import ProductsContainer from "../components/ProductsContainer"
import PaginationContainer from "../components/PaginationContainer"
import ScrollToTop from "../components/ScrollToTop"

const Products = () => {
  return (
   <>
   <Filter/>
   <ProductsContainer/>
   <ScrollToTop/>
   <PaginationContainer/>
   
   </>
  )
}

export default Products