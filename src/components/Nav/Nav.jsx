import { NavTitleBox, NavTitleItem, NavTitle } from "components/Nav/Nav.styled"

export const Nav = ({closeMenu = null}) => {
    return (<NavTitleBox>
        <NavTitleItem><NavTitle to='/news' onClick={closeMenu}>News</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/notices' onClick={closeMenu}>Find pet</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/friends' onClick={closeMenu}>Our friend</NavTitle></NavTitleItem>
    </NavTitleBox>)
} 
