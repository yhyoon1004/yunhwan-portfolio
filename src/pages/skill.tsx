import Layout from "../../components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import BlurText from "@components/effect/text/BlurText";

export default function SkillPage() {

    return (
        <Layout>
            <BlurText
                variant={"h4"}
                text={"기술"}
                fontWeight={700}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
            />
        </Layout>
    )
}
