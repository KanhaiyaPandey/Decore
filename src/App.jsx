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
import { Landingloader } from './utils/loaders'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
         element: <LandingPage/>,
         ErrorElement: <ErrorElement/>,
         loader: Landingloader,
      },
      {
        path: "products",
         element: <Products/>
      },
      {
        path: "products/:id",
         element: <SingleProduct/>
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
        element: <Orders/>
      },
      {
        path: "checkout",
        element: <Checkout/>
      }
    ]
  },

  {
    path: "/register",
    element: <Register/>,
    errorElement: <Error/>,
  },

  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>,
  },

])

const App = () => {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
