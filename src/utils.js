
import { LiaFantasyFlightGames } from "react-icons/lia"
import { redirect } from "react-router-dom"

// whenever we click protected route, we hit this function
export async function requireAuth(request) {
    const path = new URL(request.url).pathname
    const loggedIn = localStorage.getItem('loggedin')
    const response = redirect(`/login/?message=You must login first&redirectedTo=${path}`)
    response.body = true
    if (!loggedIn){
        return response
    }
    return redirect('/')
}