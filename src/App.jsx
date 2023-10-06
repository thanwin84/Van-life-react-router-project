import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Vans, {Loader as vansLoader} from './pages/vans/Vans'
import VanDetails, {Loader as vanDetailsLoader}from './pages/vans/VanDetails'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans, {Loader as hostVansLoader} from './pages/host/HostVans'
import HostVanDetails, {Loader as hostVanDetailLoader} from './pages/host/host-van-details/HostVanDetails'
import Details from './pages/host/host-van-details/components/Details'
import Pricing from './pages/host/host-van-details/components/Pricing'
import Photo from './pages/host/host-van-details/components/Photos'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, {Loader as loginLoader, action as loginAction} from './pages/Login'
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  redirect
} from 'react-router-dom'
import { requireAuth } from './utils'
localStorage.removeItem('loggedin')

import "./server"
import './App.css'



function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<Layout/>}>
        <Route path='*' element ={<NotFound/>} />
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={<About/>} />
        <Route 
          path='/vans' 
          element = {<Vans/>} 
          loader={vansLoader}  
          errorElement={<Error/>}
        />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route path='/vans/:id' element = {<VanDetails/> } loader={vanDetailsLoader} />
          <Route path= 'host' element ={<HostLayout/>}  loader ={async ({request})=> await requireAuth(request)}>
            <Route 
              index 
              element ={<Dashboard/>}
              loader ={async ({request})=> await requireAuth(request)}
            />
              
            <Route 
              path= 'income' 
              element ={<Income/>} 
              loader ={async ({request})=> await requireAuth(request)}
              /> 
            <Route 
              path= 'reviews' 
              element ={<Reviews/>}  
              loader ={async ({request})=> await requireAuth(request)}
            />
            <Route 
              path='vans'
              element={<HostVans/>}
              loader ={hostVansLoader} 
            />
            <Route 
              path='vans/:id' 
              element ={<HostVanDetails/>}
              loader ={hostVanDetailLoader}
            >
              <Route 
                index  
                element ={<Details/>} 
                loader ={async ({request})=> await requireAuth(request)}
              />
              <Route 
                path ='pricing' 
                element ={<Pricing/>}
                loader ={async ({request})=> await requireAuth(request)}
                />
              <Route 
                path ='photo' 
                element ={<Photo/>}
                loader ={async ({request})=> await requireAuth(request)}
                />
            </Route>
          </Route>
      </Route>
  ))

  return (
    <div className='w-11/12 mx-auto'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
 