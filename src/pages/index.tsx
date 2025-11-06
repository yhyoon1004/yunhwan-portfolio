import {Box} from "@mui/material";
import Layout from "@components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import useDeviceByClient from "../../hook/useDeviceByClient";
import BlurText from "@components/effect/BlurText";


export default function Home() {
    const deviceInfo = useDeviceByClient();

    return (
        <Layout>
            <BlurText
                text="Web Developer YunHwan's Portfolio"
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
            />

        </Layout>
    );
}
