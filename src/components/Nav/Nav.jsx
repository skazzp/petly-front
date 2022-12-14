import { NavLink } from "react-router-dom"
export const Nav = ({toggleMenu}) => {
    return (<div style={{textAlign: "center"}}>
        <NavLink to='/news' style={{display: 'block'}} onClick={toggleMenu}>NewsPage</NavLink>
        <NavLink to='/notices' style={{display: 'block'}} onClick={toggleMenu}>NoticesPage</NavLink>
        <NavLink to='/friends' style={{display: 'block'}} onClick={toggleMenu}>OurFriendsPage</NavLink>
    </div>)
} 