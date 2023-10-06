import React from 'react'
import {Link} from 'react-router-dom'
export default function About(){
  return (
    <div>
      <div className=''>
        <img className='w-full' src='https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' />
        <div className=''>
          <h1 className='mt-4 mb-3 text-3xl text-center font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className='mb-4 text-base'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <p className='text-base font-normal'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='text-center p-8 m-2 bg-orange-400 rounded-sm'> 
          <h2 className=' text-3xl font-medium mb-6'>Your destination is waiting.<br />Your van is ready.</h2>
          <Link className='text-xl bg-black text-white p-2 rounded-md ' to='/about'> Explore Our Vans</Link>
        </div>

      </div>
    </div>
  )
}