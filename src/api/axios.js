import axios from "axios";
const API_URL = `http://${process.env.REACT_APP_HOST}${process.env.REACT_APP_AUTHURL}`

export default axios.create({
    baseURL: API_URL
})
export const axiosPrivate = axios.create({
    baseURL: API_URL,
    headers:{'Content-Type': 'application/json'},
    withCredentials: true
})

