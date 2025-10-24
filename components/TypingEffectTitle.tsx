'use client'

import {Box, Typography} from "@mui/material";
import {useTyping} from "../hook/useTyping";

export default function TypingEffectTitle({title}: { title: string }) {
    const typed = useTyping(title, {speed: 70, delay: 200, loop: false});

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <Typography variant="h4" component="h2" whiteSpace={'pre'} fontWeight={700}>
                {typed}
            </Typography>
            <Box
                aria-hidden
                sx={{
                    width: '2px',
                    height: '2em',
                    bgcolor: 'currentColor',
                    animation: 'blink 0.9s step-end infinite',
                    '@keyframes blink': {
                        '0%, 100%': {opacity: 0},
                        '50%': {opacity: 1},
                    },
                    '@media (prefers-reduced-motion: reduce)': {animation: 'none', opacity: 1},
                }}
            />
        </Box>
    );
}