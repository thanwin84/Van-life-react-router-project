import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Header(){
   
    const headerLinks = [{id: 1, path: "/host", name: "Host"}, {id: 2, path: "/about", name: "About"}, {id: 3, path: "/vans", name: "Vans"},{id:4, path:"login", name:"Login"}]
    return (
        <header className='flex justify-between p-6'>
            <NavLink className='text-3xl font-medium' to='/'>#Vanlife</NavLink>
            <nav 
                className='w-80 text-lg font-medium cursor-pointer text-slate-600 hover:text-slate-800  grid grid-cols-4 '>
                {
                    headerLinks.map(path =>(
                        <NavLink 
                            key = {path.id}
                            className={({isActive})=> isActive? "underline text-slate-800": null}  
                            to={path.path}
                        >
                            {path.name}
                        </NavLink>
                    ))
                }
                
            </nav>
      </header>
    )
}