import { DecorationContainer } from "components/DecorationContainer"
import { useSelector } from "react-redux"
import { isModalOpen } from "redux/modal/modalSelectors"
import { Title, TitleThumb} from "./HomePage.styled"
export const HomePage = () => {
    const modalOpen = useSelector(isModalOpen)
    return (<>
    <TitleThumb><Title>Take good care of your small pets</Title></TitleThumb>
    {!modalOpen && <DecorationContainer/>}
    </>)
}