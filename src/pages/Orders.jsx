/* eslint-disable no-unused-vars */
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import OrdersList from '../components/OrdersList'
import PaginationContainer from '../components/PaginationContainer'
import { useLoaderData } from 'react-router-dom'

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
    <SectionTitle text='Your Orders' />
    <OrdersList />
    <PaginationContainer />
  </>
  )
}

export default Orders