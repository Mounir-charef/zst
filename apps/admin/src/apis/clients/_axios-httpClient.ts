import axios from "axios";

const axiosHttpClient = axios.create({})

axiosHttpClient.interceptors.request.use((request) => {
    return request
}, (error) => Promise.reject(error))

axiosHttpClient.interceptors.response.use((response) => {
    return response
}, (error) => Promise.reject(error))

export default axiosHttpClient