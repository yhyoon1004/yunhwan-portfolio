import Head from "next/head";
import {ReactNode} from "react";
import {Container} from "@mui/material";
import LiquidBackground from "@components/effect/background/LiquidBackground";
import ClickSpark from "@components/effect/mouse/ClickSpark";
import GlobalNavigationBar from "@custom-mui/navigation/AppBar";

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
                <LiquidBackground
                    style={{position: 'fixed', inset: 0, zIndex: -1, opacity: 0.5, pointerEvents: 'none'}}
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
                />

                {/*header*/}
                <GlobalNavigationBar/>

                {/*main*/}
                <Container maxWidth="lg" component="main"
                           sx={{
                               position: 'relative',
                               overflowY: 'auto',
                               scrollbarWidth: "none",
                               msOverflowStyle: 'none',      // IE/Edge(구)
                               '&::-webkit-scrollbar': {     // Chrome/Safari/Edge(Chromium)
                                   display: 'none',
                               },
                               WebkitOverflowScrolling: 'touch',// 선택: 터치 스크롤 감도 개선(모바일 사파리)
                           }}>
                    {children}
                </Container>

                {/*footer*/}
                <footer>

                </footer>
            </ClickSpark>
        </>
    )
}

export default Layout;