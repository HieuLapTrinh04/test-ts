import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.clear();
        navigate('/login')
    }
    return <div>
        <h1>day la trang home</h1>
        <button onClick={handleClick}>Log out</button>
    </div>
}
export default Home