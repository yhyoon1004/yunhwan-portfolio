import type {AppProps} from "next/app";
import CssBaseline from '@mui/material/CssBaseline';
import '@styles/library-custom.css'
import '@styles/liquid-background.css'
import '@styles/rotating-text.css'
import AppTheme from "../../mui/AppTheme";

export default function App({Component, pageProps}: AppProps) {

    return (
        <AppTheme>
            <CssBaseline/>
            <Component {...pageProps} />
            <style jsx global>{`
                html, body {color-scheme: dark;}
            `}</style>
        </AppTheme>
    )

}
