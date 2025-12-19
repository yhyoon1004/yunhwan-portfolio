import {Html, Head, Main, NextScript} from "next/document";
import {InitColorSchemeScript} from "@mui/material";

export default function Document() {
    return (
        <Html lang="ko" suppressHydrationWarning>
            <Head/>
            <body>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                    height="0"
                    width="0"
                    style={{display: 'none', visibility: 'hidden'}}
                />
            </noscript>
            <InitColorSchemeScript attribute="data" defaultMode="system"/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
