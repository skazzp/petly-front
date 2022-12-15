import { NavTitleBox, NavTitleItem, NavTitle } from "components/Nav/Nav.styled"

export const Nav = ({toggleMenu}) => {
    return (<NavTitleBox>
        <NavTitleItem><NavTitle to='/news' onClick={toggleMenu}>News</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/notices' onClick={toggleMenu}>Find pet</NavTitle></NavTitleItem>
        <NavTitleItem><NavTitle to='/friends' onClick={toggleMenu}>Our friend</NavTitle></NavTitleItem>
    </NavTitleBox>)
} 

// export const Nav = () => {
//     return(<ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none',}}>
//         <li style={{marginRight: '80px'}}><a>News</a></li>
//         <li style={{marginRight: '80px'}}><a>Find</a></li>
//         <li><a>Our friend</a></li>
//     </ul>)
// }