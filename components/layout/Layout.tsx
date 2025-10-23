import Head from "next/head";
import {ReactNode} from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Head>
                <title>{"Web Developer YunHwan"}</title>
                <meta name="description" content="웹 개발자"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </>
    )
}

export default Layout;