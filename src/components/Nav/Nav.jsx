import { NavTitleBox, NavTitleItem, NavTitle } from "components/Navigation/Navigation.styled"
export const Nav = ({toggleMenu}) => {
    return (<NavTitleBox>
        <NavTitleItem><NavTitle to='/news' style={{display: 'block'}} onClick={toggleMenu}>News</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/notices' style={{display: 'block'}} onClick={toggleMenu}>Find pet</NavTitle></NavTitleItem>
        <NavTitleItem> <NavTitle to='/friends' style={{display: 'block'}} onClick={toggleMenu}>Our friend</NavTitle></NavTitleItem>
    </NavTitleBox>)
} 