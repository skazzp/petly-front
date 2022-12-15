import { Logo } from "components/Logo"
import { Navigation } from "components/Navigation"
import { Container} from './Header.styled'


export const Header = () => {
    return(<Container>
        <Logo/>
        <Navigation/>
    </Container>)
}

