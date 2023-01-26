import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"


function UserRoute({children}){
    const {currentUser} = useAuthContext()
    const navigate = useNavigate()
    return currentUser ? children : navigate('/')
}
export default UserRoute