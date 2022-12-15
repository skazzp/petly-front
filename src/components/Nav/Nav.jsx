import { NavTitleBox, NavTitleItem, NavTitle } from "components/Nav/Nav.styled"

export const Nav = ({toggleMenu = null}) => {
    return (<NavTitleBox>
        <NavTitleItem><NavTitle to='/news' onClick={toggleMenu}>News</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/notices' onClick={toggleMenu}>Find pet</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/friends' onClick={toggleMenu}>Our friend</NavTitle></NavTitleItem>
    </NavTitleBox>)
} 
