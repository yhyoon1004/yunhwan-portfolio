import Layout from "../../components/layout/Layout";
import BlurText from "@components/effect/text/BlurText";

export default function IntroPage() {
    return (
        <Layout>
            <BlurText
                variant={"h4"}
                text={"자기소개"}
                fontWeight={700}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
            />
        </Layout>
    )
}