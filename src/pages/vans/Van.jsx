import React from 'react'
import { Link } from 'react-router-dom'


export default function Van({type, name, imageUrl, price, id}){
    return (
        <div className='shadow-lg'>
            
            <Link to = {`/vans/${id}`}>
                <img src = {imageUrl} alt='' />
                <div className='p-2 mb-2'>
                    <div className='flex justify-between mb-2'>
                        <p>{name}</p>
                        <p className='font-medium'>${price}/Day</p>
                    </div>
                    <span className='bg-orange-500 p-1 rounded-sm text-white'>{type}</span>
                </div>
            </Link>
        </div>
    )
}