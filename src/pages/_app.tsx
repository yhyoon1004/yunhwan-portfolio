import type {AppProps} from "next/app";
import CssBaseline from '@mui/material/CssBaseline';
import '@styles/global.css'
import '@styles/liquid-background.css'
import '@styles/rotating-text.css'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "@custom-mui/theme";
import Layout from "@components/layout/Layout";
import {GoogleTagManager} from "@next/third-parties/google";

export default function App({Component, pageProps}: AppProps) {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID

    return (
        <ThemeProvider theme={theme} defaultMode={"dark"} disableTransitionOnChange>
            <CssBaseline/>
            <Layout>
                <Component {...pageProps} />
                {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
            </Layout>
        </ThemeProvider>
    )

}
