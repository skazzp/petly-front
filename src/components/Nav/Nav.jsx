import { NavTitleBox, NavTitleItem, NavTitle } from "components/Nav/Nav.styled"

export const Nav = ({toggleMenu}) => {
    return (<NavTitleBox>
        <NavTitleItem style={{marginRight: '80px'}}><NavTitle to='/news' style={{display: 'block'}} onClick={toggleMenu}>News</NavTitle></NavTitleItem>
        <NavTitleItem style={{marginRight: '80px'}}><NavTitle to='/notices' style={{display: 'block'}} onClick={toggleMenu}>Find pet</NavTitle></NavTitleItem>
        <NavTitleItem> <NavTitle to='/friends' style={{display: 'block'}} onClick={toggleMenu}>Our friend</NavTitle></NavTitleItem>
    </NavTitleBox>)
} 

// export const Nav = () => {
//     return(<ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none',}}>
//         <li style={{marginRight: '80px'}}><a>News</a></li>
//         <li style={{marginRight: '80px'}}><a>Find</a></li>
//         <li><a>Our friend</a></li>
//     </ul>)
// }