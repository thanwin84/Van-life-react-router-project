import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Photo(){
    const {currentVan} = useOutletContext()
    return (
        <section>
            <img  className='w-60 p-3' src={currentVan.imageUrl} alt="" />
        </section>
    )
}