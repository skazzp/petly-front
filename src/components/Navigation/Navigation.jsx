import { AuthNav } from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import { Nav } from "components/Nav/Nav"
import { UserNav } from "components/UserNav/UserNav"
import { NavLink } from "react-router-dom"
import * as ReactDOM from 'react-dom';
import { Container } from "./Navigation.styled";

export const Navigation = ({toggleMenu}) => {
    const isLoggedIn = useSelector(selectToken);
    const modalRoot = document.querySelector("#modal-root")
    
    return(ReactDOM.createPortal(<Container>
        {isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> :  <AuthNav toggleMenu={toggleMenu}/>}
        <Nav/>
    <button >
        <NavLink to='/test' >TEST</NavLink >
    </button>
    </Container>, modalRoot)
    )
} 