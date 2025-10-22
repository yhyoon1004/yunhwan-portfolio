import Head from "next/head";
import {ReactNode} from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Head>
                <title>{"웹 개발자 성윤환 사이트"}</title>
                <meta name="description" content="웹 개발자 성윤환의 개인 사이트"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/yh_favicon.ico"/>
            </Head>
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </>
    )
}

export default Layout;