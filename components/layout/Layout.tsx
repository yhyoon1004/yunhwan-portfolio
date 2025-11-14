import Head from "next/head";
import {ReactNode} from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import {Container} from "@mui/material";
import LiquidBackground from "@components/effect/background/LiquidBackground";
import ClickSpark from "@components/effect/mouse/ClickSpark";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Head>
                <title>{"Web Developer YunHwan"}</title>
                <meta name="description" content="웹 개발자 윤환"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
                <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/favicon-512x512.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <ClickSpark sparkColor='#fff'
                        sparkSize={10}
                        sparkRadius={15}
                        sparkCount={8}
                        duration={400}>
                <LayoutHeader/>
                <Container maxWidth="lg" component="main" sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4}}>
                    <LiquidBackground
                        style={{position: 'absolute', inset: 0, zIndex: -1, opacity: 0.5, pointerEvents: 'none'}}
                        colors={['#445eac', '#7ea0d1', '#aed1ff']}
                        mouseForce={20}
                        cursorSize={100}
                        resolution={0.5}
                        dt={0.014}
                        BFECC={true}
                        isViscous={false}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={1000}
                        autoRampDuration={0.6}
                        className=""
                    />
                    {children}
                </Container>
                <LayoutFooter/>
            </ClickSpark>
        </>
    )
}

export default Layout;