import { Link } from "react-router-dom"
export const Nav = () => {
    return (<div>
        <Link to='/news'>NewsPage</Link>
        <Link to='/notices'>NoticesPage</Link>
        <Link to='/friends'>OurFriendsPage</Link>
    </div>)
} 