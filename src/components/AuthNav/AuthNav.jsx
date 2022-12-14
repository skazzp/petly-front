import { Link, NavLink } from "react-router-dom"

export const AuthNav = ({toggleMenu}) => {
    return(
        <div style={{textAlign: "center"}}>
            <NavLink to='/register' onClick={toggleMenu}>RegisterPage</NavLink > 
            <NavLink to='/login' onClick={toggleMenu}>LoginPage</NavLink>
        </div>
    )
}