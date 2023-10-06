export const getVanList = async()=>{
    try {
        const response = await fetch("/api/vans")
        const data = await response.json();
        return data.vans
    } catch(error){
        throw new Error("something wrong has happend")
    }
    
} 

export const getSingleVanDetails = async(pathId)=>{
    try {
        const response = await fetch(`/api/vans/${pathId}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error("something wrong has happend")
    }
}


export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}