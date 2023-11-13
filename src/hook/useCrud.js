import { useState } from "react"
import axios from "axios"

const useCrud = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()

    //GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch (err => console.log(err))
    }
    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
        .then(res =>{
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
           })
       .catch(err => console.log(err))
    }
    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then(res =>{
            setInfoApi(infoApi.filter(e => e.id != id))
        })
        .catch(err => console.log(err))
    }
    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
        .then (res =>{
            console.log(res.data)
            setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
        })
        .catch(err => console.log(err))
        }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useCrud