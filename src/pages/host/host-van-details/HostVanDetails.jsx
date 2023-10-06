import React from 'react'
import HeaderNavigation from './components/HeaderNavigation'
import { Outlet, Link, useLoaderData} from 'react-router-dom'
import { LiaArrowLeftSolid } from "react-icons/lia";
import { getHostVans } from '../../../API';
import { requireAuth } from '../../../utils';

export async function Loader({params, request}){
    console.log("hello")
    // check if the user is authenticated to use this route
    await requireAuth()
    return await getHostVans(params.id)
}

function ShowHeader({imageUrl, name, price, type }){
    return (
        <div className='flex'>
            <img className="w-44 " src={imageUrl} alt="" />
            <div className='ml-4 pt-5'>
                <p className='mb-2 bg-orange-500 text-white text-center w-20 rounded-sm'>{type}</p>
                <h3 className='text-lg font-medium'>{name}</h3>
                <p><span className='font-medium'>${price}</span>/day</p>
            </div>
        </div>
    )
}

export default function HostVanDetails(){
    const currentVan = useLoaderData()

    return (
        <section>
            <Link to ='..' relative ='path' className='ml-6  text-lg text-slate-700 flex items-center hover:underline hover:text-gray-900 '>
                 <LiaArrowLeftSolid/> Go back to all Vans
            </Link>
            <div className='bg-white p-4 mt-5 '>
            <ShowHeader 
                name = {currentVan.name} 
                price = {currentVan.price} 
                type={currentVan.type} 
                imageUrl={currentVan.imageUrl}
            />
            <HeaderNavigation />
            <Outlet context={{currentVan}}/>
        </div>
        </section>
    )
}