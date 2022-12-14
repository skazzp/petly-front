import { AuthNav } from "components/AuthNav/AuthNav";

import { Nav } from "components/Nav/Nav"
import { UserNav } from "components/UserNav/UserNav"
import { NavLink } from "react-router-dom"
import * as ReactDOM from 'react-dom';
import { Container } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
export const Navigation = ({toggleMenu}) => {
    let isLoggedIn = useSelector(selectToken);
    // isLoggedIn = true;
    return(<Container>
        <Nav toggleMenu={toggleMenu}/>
        {isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> :  <AuthNav toggleMenu={toggleMenu}/>}
    </Container>
    )
} 