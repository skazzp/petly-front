import { AuthNav } from "components/AuthNav/AuthNav"
import { Nav } from "components/Nav/Nav"
import { UserNav } from "components/UserNav/UserNav"
import { NavLink } from "react-router-dom"
import * as ReactDOM from 'react-dom';

export const Navigation = ({toggleMenu}) => {
    const isLoggedIn = true;
    const modalRoot = document.querySelector("#modal-root")
    
    return(ReactDOM.createPortal(<div style={{ textAlign: "center"}}>
        {isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> :  <AuthNav toggleMenu={toggleMenu}/>}
        <Nav/>
    <button >
        <NavLink to='/test' >TEST</NavLink >
    </button>
    </div>, modalRoot)
    )
} 