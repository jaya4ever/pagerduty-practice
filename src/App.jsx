import React from 'react'
import Navbar from './components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'
import RouteLayout from './layout/RouteLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<RouteLayout />}>
      <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
     </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
   
  )
}
export default App
