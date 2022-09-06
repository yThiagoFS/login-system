import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useAxios = () => ({
    validateToken: async (token:string) => {
        return { 
            user: {id: 3, name: 'José', email: 'abc@gmail.com'},
        }
        const response = await api.post('/validate', { token })
        return response.data
    },
    signin: async (email:string, password:string) => {
        return { 
            user: {id: 3, name: 'José', email: 'abc@gmail.com'},
            token: '123456789'
        }
        const response = await api.post('/signin', {
            email, password
        }) 
    },
    logout: async () => {
        return { status:true }
        const response = await api.post('/logout')
        return response.data
    }
})