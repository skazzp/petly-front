import { Outlet, useLocation } from "react-router-dom";
import { Header } from "components/Header";

import { GlobalContainer, WaveContainer, GirlContainer } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const { pathname } = useLocation()
    return (<><GlobalContainer pathName={pathname}>
        <Header/>
        <Outlet/>
        <GirlContainer pathName={pathname}/>
        <WaveContainer pathName={pathname}/>
    </GlobalContainer> </>)
}




