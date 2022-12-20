import { LogoNormal, LogoAccent, LogoLink } from "./Logo.styled"

export const Logo = () => {
    return (<div>
        <LogoLink to='/'><LogoNormal>pe<LogoAccent>t</LogoAccent>ly</LogoNormal></LogoLink>
        </div>
    )
}