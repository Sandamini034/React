import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx"
import "./home.css"

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <Header/>
            <div className="container">
                <h1>Welcome to SoulCity</h1>
                <p>SoulCity is a song collection of the artist Ruby.</p>
                <button onClick={()=>navigate("/login")}>Get Started</button>
            </div>
        </>
    )
}

export default Home;