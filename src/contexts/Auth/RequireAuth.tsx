import { useContext, ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { Login } from "../../Pages/Login"
interface RequireAuthProps {
    children: JSX.Element
}
export const RequireAuth = ({ children }: RequireAuthProps) => {
    const { user } = useContext(AuthContext)

    if(!user) {
        return <Login />
    }
    return children
}