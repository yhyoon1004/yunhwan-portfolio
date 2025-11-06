import Head from "next/head";
import {ReactNode} from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import {Container} from "@mui/material";
import LiquidBackground from "@components/effect/LiquidBackground";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Head>
                <title>{"Web Developer YunHwan"}</title>
                <meta name="description" content="웹 개발자"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon/favicon.ico"/>
            </Head>
            <LayoutHeader/>
            <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -1,
                    pointerEvents: 'none',}}>
                <LiquidBackground
                    colors={[ '#445eac', '#7ea0d1', '#aed1ff' ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={300}
                    autoRampDuration={0.6}
                    style={{
                        opacity: 0.5,
                    }}
                />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <LayoutHeader/>
                <Container
                    maxWidth="lg"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
                >
                    {children}
                </Container>
                <LayoutFooter/>
            </div>
        </>
    )
}

export default Layout;