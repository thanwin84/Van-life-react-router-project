import React from 'react'
export function AlertMessage({message}){
    return (
        <h2 className="bg-red-100 text-red-700 mb-4 border border-red-300 p-2 rounded-md ">
            {message}
        </h2>
    )
}