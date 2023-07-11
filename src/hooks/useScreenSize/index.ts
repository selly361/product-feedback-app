import { useEffect, useState } from 'react'

const useScreenSize = () => {

    const [isMobileSize, setMobileSize] = useState(false)
    const [isTabletSize, setTabletSize] = useState(false)
    const [isDesktopSize, setDesktopSize] = useState(false)


    useEffect(() => {
        
        function handleScreenChange(){
            setDesktopSize(window.innerWidth > 768)
            setTabletSize(window.innerWidth < 768 && window.innerWidth > 375)
            setMobileSize(window.innerWidth < 375)
        }


        handleScreenChange()

        
        window.addEventListener("resize", handleScreenChange)
        
        return () => window.removeEventListener("resize", handleScreenChange)

        
    }, [])
    

    return { isMobileSize, isTabletSize, isDesktopSize }
}

export { useScreenSize }