import React,{useEffect, useState} from 'react'
import { useParams, Link , useLoaderData} from 'react-router-dom'
import { getSingleVanDetails } from '../../API';

export async function Loader({params}){
    const data = await getSingleVanDetails(params.id)
    
    return data.vans
}

export default function (){
    const van = useLoaderData()
    return (
        <section className='p-4'>
            
            {
                van ? 
                <div>
                <img className='rounded-sm' src={van.imageUrl} />
                <h3 className='text-2xl font-medium mt-2 mb-2'>{van.name}</h3>
                <p className='text-xl mb-2'><span className='font-medium'>${van.price}</span>/Day</p>
                <p className='mb-2'>{van.description}</p>
                <button className='p-2 mb-2 w-full bg-orange-500 text-white font-medium'>Rent This Van</button>
            </div> : <h2>Loading...</h2>
            }
        </section>
    )
}