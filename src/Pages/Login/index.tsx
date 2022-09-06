import { useContext,useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"
export const Login = () => {

    const { signin } = useContext(AuthContext)
    const navigate =  useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await signin(email, password)
            if(isLogged) {
                navigate('/')
            } else {
                alert('didnt work')
            }
        }
    }
    return(
        <div>
            <h2>Closed Page</h2>

            <input 
            type="text" 
            placeholder="type your email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
            <input 
            type="text" 
            placeholder="type your password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <button onClick={handleLogin}>Add user</button>
        </div>
    )
}