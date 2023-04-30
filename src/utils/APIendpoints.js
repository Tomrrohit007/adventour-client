export const getRequest = async(options, func) =>{
    const response = await fetch(options)
    if(response.ok){
        const data = await response.json()
        func(data.data)
    }
}  