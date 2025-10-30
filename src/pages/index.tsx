import {Box} from "@mui/material";
import Layout from "@components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import useDeviceByClient from "../../hook/useDeviceByClient";


export default function Home() {
    const deviceInfo = useDeviceByClient();

    return (
        <Layout>
            <TypingEffectTitle title={"Web Developer YunHwan's Portfolio"}/>

        </Layout>
    );
}
