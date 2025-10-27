'use client';
import {useMediaQuery} from '@mui/material';
import {useTheme} from "@mui/system";

export default function useDeviceByClient(): "mobile" | "tablet" | "desktop" {
    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.up("xl"), {noSsr: true});
    const lg = useMediaQuery(theme.breakpoints.up("lg"), {noSsr: true});
    const md = useMediaQuery(theme.breakpoints.up("md"), {noSsr: true});
    const sm = useMediaQuery(theme.breakpoints.up("sm"), {noSsr: true});

    if (xl) return "desktop";
    if (lg) return "desktop";
    if (md) return "tablet";
    if (sm) return "mobile";
    return "mobile";
}

