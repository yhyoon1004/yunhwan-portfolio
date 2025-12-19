import {Html, Head, Main, NextScript} from "next/document";
import {InitColorSchemeScript} from "@mui/material";

export default function Document() {
    return (
        <Html lang="ko" suppressHydrationWarning>
            <Head/>
            <body>
            <InitColorSchemeScript attribute="data" defaultMode="system"/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
