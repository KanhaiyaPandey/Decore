/* eslint-disable no-unused-vars */
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import CartTotals from '../components/CartTotals'
import CheckoutForm from '../components/CheckoutForm'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems.length === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout