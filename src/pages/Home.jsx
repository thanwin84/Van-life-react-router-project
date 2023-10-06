import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
  return (
    <div className='p-20 mt-5 bg-slate-700 text-center'>
      <h1 className='text-3xl font-bold mb-3 text-white'>You got the travel plans, we got the travel vans.</h1>
      <p className='mb-6  text-slate-300 text-lg'>Add adventure to your life by joining the <span className='font-medium '>#Vanlife</span> movement. Rent the perfect van to make your perfect road trip.</p>
      <Link className='p-2  block text-white font-medium rounded-md bg-orange-400 hover:bg-orange-600' to="vans">Find Your Van</Link>
    </div>
  )
}
