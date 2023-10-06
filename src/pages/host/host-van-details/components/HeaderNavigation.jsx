import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderNavigation(){
    const navLinkStyle = "underline font-medium"
    const navlinks = [{id: 0, name: "Details", path: `.`}, {id: 1, name: "Pricing", path: `pricing`}, {id: 2, name: "Photo", path: `photo`}]

    return (
        <div className='mt-2 text-normal flex justify-between w-44 text-slate-800'>
            {
                navlinks.map(item =>(
                    <NavLink  
                    end
                    className={({isActive})=> isActive ? navLinkStyle: "hover:underline"}
                    to = {item.path}
                    key={item.id}>{item.name}</NavLink>
                ))
            }
        </div>

    )
}