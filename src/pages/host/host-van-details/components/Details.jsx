import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Details(){
    const {currentVan} = useOutletContext()
    
    return (
        <section>
            <p className='mb-2'><span className='font-medium'>Name: </span>{currentVan.name}</p>
            <p className='mb-2'><span className='font-medium'>Type: </span>{currentVan.type}</p>
            <p className='mb-2'><span className='font-medium'>Description: </span>{currentVan.description}</p>
            <p><span className='font-medium'>Visiblity: </span>Public</p>
        </section>
    )
}