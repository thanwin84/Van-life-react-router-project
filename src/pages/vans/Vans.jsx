import React, {useEffect, useState} from 'react'
import Van from './Van'
import {
     useSearchParams, 
     Link,  
     useLoaderData} from 'react-router-dom'
import { getVanList } from '../../API'

export function Loader(){
    return getVanList()
}
export default function VansList(){
    const vans = useLoaderData()
    const [error, setError] = useState(null)
    let [searchParams, setSearchParams] = useSearchParams()
    var filterValues = searchParams.getAll('type')

    
    

    const filteredVanList = filterValues.length > 0 ? vans.filter(item => filterValues.includes(item.type.toLowerCase())) : vans


    const vanElements = filteredVanList.map(van =>(
        <Van 
            key ={van.id}
            name = {van.name}
            type = {van.type}
            price = {van.price}
            imageUrl={van.imageUrl}
            id = {van.id}
            
        />
    ))

    function handleFilterClick(value){
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.append("type", value.type)
        setSearchParams(newSearchParams)
    }
   
    function FilteredButtons({nameList}){
        const buttonValues = [...new Set(nameList.map(item=> item.type))]
        const isActiveStyle = (value)=>{
            return filterValues.length  > 0 && filterValues.includes(value)  ? "bg-orange-400": ""
        }
        return (
            <>
               {
                buttonValues.map(item =>(
                    <button
                        className={
                            `mr-2 text-normal font-serif bg-orange-300 p-1 pl-2 pr-2 rounded-md text-slate-800 underline hover:bg-orange-400 ease-in duration-75  ${isActiveStyle(item)}`
                        }
                        key ={item}
                        onClick={()=> handleFilterClick({type: item})}
                    >
                        {item}
                    </button>
                ))
               }
            </>
        )
    }


    function ClearButton(){
        return <Link 
                    className='font-serif bg-red-500 text-white pl-2 pr-2 p-1 rounded-sm underline hover:bg-red-600 ease-in duration-75'
                    to ='.'
                >
                    Clear Filter
                </Link>
    }
    if (error){
        return (
            <div className='p-4 text-xl font-normal mt-4 mb-4 bg-red-50' role='alert'>
                <h1 className='text-red-500 '>There was an error</h1>
            </div>
        )
    }
    
    return (
        <section className='mb-6'>
            <div className='mb-4' >
                <FilteredButtons nameList={vans} />
                {filterValues.length > 0 ? <ClearButton/>: null}
                
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    vanElements
                }
            </div>
        </section>
    )
}