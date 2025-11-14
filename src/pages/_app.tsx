import type {AppProps} from "next/app";
import CssBaseline from '@mui/material/CssBaseline';
import '@styles/library-custom.css'
import '@styles/liquid-background.css'
import '@styles/rotating-text.css'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../mui-custom/theme";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme} defaultMode={"dark"} disableTransitionOnChange>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )

}
