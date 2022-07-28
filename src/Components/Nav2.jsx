import { Link } from "react-router-dom";

function Nav2(){
    return (
        
        <nav className="nav">
            <ul className="navLinks">
            <Link style={{textDecoration: "none"}} to ='AboutUs'>
            <li>
                About Us!
            </li> 
            </Link>
            <Link style={{textDecoration: "none"}} to ='OurPicks'>
            <li>
                Our Picks!    
            </li>
            </Link>
            <Link style={{textDecoration: "none"}} to ='Search' >
            <li>
                Search!
            </li>
            </Link>
            </ul>
        </nav>




    )

};

export default Nav2