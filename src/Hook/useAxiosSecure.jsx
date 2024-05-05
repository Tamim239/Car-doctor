import axios from "axios"
import { useEffect } from "react"
import { UseAuth } from "./UseAuth"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
export const useAxiosSecure = () => {
    const {logOut} = UseAuth()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        }, error =>{
            if(error.response.status === 401 || error.response.status === 403){
                console.log("logOut")
                 logOut()
                 .then(()=>{
                    navigate('/login')
                 })
                 .catch(err =>{
                    console.log(err.message)
                 })
            }
        })
    }, [logOut, navigate])


  return axiosSecure
}
