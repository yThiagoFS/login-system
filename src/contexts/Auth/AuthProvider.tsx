import { useEffect,useState,ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useAxios } from "../../hooks/useAxios"
interface AuthProviderProps {
    children: ReactNode
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const api = useAxios()

    useEffect(() => {
        const validateToken = async () => {
            const storageData =  localStorage.getItem('authToken')
            if(storageData){
                const data = await api.validateToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        validateToken()
    }, [api])
    const signin = async (email: string, password: string) =>{
        const data = await api.signin(email, password)
        if(data.user && data.token) {
            setUser(data.user)
            setToken(data.token)
            return true
        }
        return false
    }

    const signout = async () => {
        setUser(null) 
        setToken('')
        await api.logout()
    }

    const setToken = (token:string) => {
        localStorage.setItem('authToken', token)
    }
    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}