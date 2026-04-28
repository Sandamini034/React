import "./header.css"
import { Link } from "react-router-dom"
import logo from "./assets/header.avif"

function Header(){
  return(
    <div className="box1">
        <img src={logo} alt="logo" className="header-img"></img>
        <div className="box2">
        <h1>SoulCity</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
        </div>
    </div>
  )
}

export default Header