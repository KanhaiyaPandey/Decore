/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import About from "./pages/About"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage"
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'
import Orders from './pages/Orders'
import ErrorElement from './components/ErrorElement'
import Checkout from './pages/Checkout'
import { checkoutLoader, Landingloader, orderLoader, ProductsLoader, SingleProductLoader } from './utils/loaders'
import { checkoutAction, LoginAction, RegisterAction } from './utils/actions'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
         element: <LandingPage/>,
         loader: Landingloader,
         ErrorElement: <ErrorElement/>,
      },
      {
        path: "products",
         element: <Products/>,
         loader: ProductsLoader,
         errorElement: <ErrorElement/>
      },
      {
        path: "products/:id",
         element: <SingleProduct/>,
         loader: SingleProductLoader,
         errorElement: <ErrorElement/>
      },
      {
        path: "cart",
         element: <Cart/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "orders",
        element: <Orders/>,
        loader: orderLoader(store),
      },
      {
        path: "checkout",
        element: <Checkout/>,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      }
    ]
  },

  {
    path: "/register",
    element: <Register/>,
    action: RegisterAction,
    errorElement: <Error/>,
  },

  {
    path: "/login",
    element: <Login/>,
    action: LoginAction(store),
    errorElement: <Error/>,
  },

])

const App = () => {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
