'use client'

import Box from "@mui/material/Box";
import {ReactNode, useEffect, useState} from "react";

const CollapseBox = ({children,}: { children: ReactNode }) => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true)
    }, [])

    return (
        <Box
            sx={{
                transform: isMount ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'transform 0.3s ease'
            }}
        >
            {children}
        </Box>
    )
}

export default CollapseBox