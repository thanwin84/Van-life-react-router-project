import React, {useState} from "react";
import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation
} from 'react-router-dom'
import { loginUser } from "../API";
import { AlertMessage } from "../components/Alert";

export function Loader({request}){
    const message =new URL(request.url).searchParams.get("message")
    return message
}


export async function action({request}){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const path = new URL(request.url).searchParams.get("redirectedTo") ||"/about"
    // checking if the user has correct password and username
    try {
        const data =await loginUser({email, password})
        localStorage.setItem("loggedin", true)
        const res = redirect(path)
        res.body = true
        return res
    } catch (error) {
        return "Could not login, Please check your password or username"
    }
    
}



export default function Login(){
    const loginAlertMessage = useLoaderData()
    const error = useActionData()
    const state = useNavigation().state
    
    
    return (
        <div className="p-4  w-full md:w-3/5 m-auto ">
            <h1 className="text-center text-3xl font-medium mb-4">
                 Sign in to your account
            </h1>
            {/* If a user tries to access protected route, it will display alert message */}
            { loginAlertMessage ? <AlertMessage message="you must login first"/> : null}

            {/* if user gives wrong username and password, it will display */}
            {error ? <AlertMessage message={error} /> : null}
            <div className="bg-white py-8 px-6 rounded-md shadow-md">
                <Form className="flex flex-col" method="post" replace>
                    <input 
                        type="email"
                        placeholder="Email address"
                        name="email"
                        className="border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 focus:ring-1 focus:ring-gray-500"
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        className="border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 focus:ring-1 focus:ring-gray-500"
                    />
                    <button 
                        className="p-1 font-medium bg-orange-400 text-white mt-4 rounded-md"
                        disabled ={state === "submitting"}
                    >
                        { state === "submitting" ? "loggin in": "Log in"}
                    </button>
                </Form>
            </div>
        </div>
    )
}