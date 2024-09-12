import axios from 'axios'

const api = axios.create({
    baseURL: 'https://whitecab-backend.vercel.app/',
})

export default api