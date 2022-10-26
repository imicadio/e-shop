import { useEffect, useState } from "react"

import { breakpoints } from "../shared/breakpoints";

export const useScreen = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const handleResize = () => {
        const width = window && window.innerWidth;

        setIsMobile(width < breakpoints.sm);
        setIsTouch(width < breakpoints.md)
    }

    useEffect(() => {
        window && window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return { isMobile, isTouch }
}