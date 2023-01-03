import { useIsDesktop, useIsMobileOrTablet } from "hooks/mediaQuery"
import { WaveDark, WaveLight, WaveSmall, WaveCircle, WaveHeart, WaveFrame, WaveGirl } from "./DecorationContainer.styled"

export const DecorationContainer = () => {
const isMobileOrTablet = useIsMobileOrTablet();
const isDesktop = useIsDesktop()
    return (
    <>
    <WaveGirl/>
    {isMobileOrTablet && <WaveSmall/>}
    {isDesktop && <><WaveLight/><WaveDark/><WaveCircle/><WaveHeart/><WaveFrame/></>}</>
   )
}