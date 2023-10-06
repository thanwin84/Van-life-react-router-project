import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Pricing(){
    const {currentVan} = useOutletContext()
    return (
        <section>
            <p><span className='text-lg font-medium'>Price: ${currentVan.price}</span>/day</p>
        </section>
    )
}