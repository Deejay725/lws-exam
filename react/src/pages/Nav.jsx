import { Link } from "react-router-dom";
import "./Nav.css"
export default function Nav() {
    return (
        <header>
            <h1>Anime Binge</h1>
           <div>
                <Link to ="/"> Home </Link>
                <Link to ="/Discover">Discover</Link>
                <Link to ="/AboutUs">About Us</Link>
                <Link to ="/SignUp">Sign Up</Link>
                <Link to ="/Login">Log In</Link>
            </div>
        </header>
    );

}

