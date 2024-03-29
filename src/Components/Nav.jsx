import { Link } from "react-router-dom";

function Nav(){
    return (
        
        <nav className="neonText">
            <ul className="navLinks">
            <Link style={{textDecoration:"none"}} to='ThisWeek'>
                <li>This Week!</li>
            </Link>
            <Link style={{textDecoration:"none"}} to='NextWeek'>
            <li>
                Next Week!
            </li>
            </Link>
            <Link style={{textDecoration:"none"}} to='LastWeek'>
            <li>
                Last Week!
            </li>
            </Link>        
            </ul>
        </nav>




    )

};

export default Nav
