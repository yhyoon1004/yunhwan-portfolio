import type {AppProps} from "next/app";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@styles/library-custom.css'
import '@styles/liquid-background.css'

export default function App({Component, pageProps}: AppProps) {
    const darkTheme = createTheme({
        colorSchemes: {
            dark: true
        },
        typography: {
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )

}
