import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../API'
import { requireAuth } from '../../utils'

export async function Loader(){
    await requireAuth()
    return getHostVans()
}

function Van({name, price, imageUrl, id}){
    return (
       <Link to={`/host/vans/${id}`}>
            <div className='flex mb-4 bg-white p-2 rounded-sm shadow-md'>
                <img className='w-20 h-20' src={imageUrl} alt={name}/>
                <div className='ml-4'>
                    <h4 className='text-lg font-medium'>{name}</h4>
                    <p>${price}/day</p>
                </div>
        </div>
       </Link>
    )
}

export default function HostVans(){
    const vans = useLoaderData()
    
    const hostVanList = vans.map(item =>(
        <Van 
            key={item.id} 
            price={item.price} 
            name={item.name} 
            imageUrl={item.imageUrl} 
            id = {item.id}
        />
    ))
    return (
        <section className='p-6'>
            <h2 className='text-2xl mb-3 font-medium'>Your listed Vans</h2>
             {hostVanList}
        </section>
    )
}