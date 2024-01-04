import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = (props: any) => {
    const navigate = useNavigate()
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn !== 'true') {
            navigate('/login')
        }
        else navigate('/')

    })
    const {children} = props
    return  children
}
export default ProtectedRoute