import iconFile from '../../assets/images/icons.svg';
import {IconSvg, Button} from './IconButton.styled.js'
export const IconButton = ({toggleMenu, icon}) => {
return (
    <Button type='button' onClick={toggleMenu}>
        <IconSvg>
        <use href={iconFile + icon}></use>
        </IconSvg>
    </Button>
)
}