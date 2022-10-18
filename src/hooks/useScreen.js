import { useEffect, useState } from "react"

import { breakpoints } from "../shared/breakpoints";

export const useScreen = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        const width = window && window.innerWidth;

        setIsMobile(width < breakpoints.sm);
    }

    useEffect(() => {
        window && window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return { isMobile }
}