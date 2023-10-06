import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'

const paths = [{id: 1, path: "/host/", name: "Dashboard"}, {id: 2, path: "income", name: "Income"}, {id: 3, path: "reviews", name: "Reviews"}, {id: 4, path: "/host/vans", name: "Vans"}]

export default function HostLayout(){
    const navLinkStyle = "underline font-medium"
    return (
        <div>
            <nav className='flex justify-between text-lg w-80'>
                {
                    paths.map(path =>(
                        <NavLink 
                            key = {path.id}
                            className={({isActive})=> isActive? navLinkStyle:"hover:underline"} 
                            to={path.path}>{path.name}
                        </NavLink>
                    ))
                }
            </nav>
            <Outlet/>
        </div>
    )
}