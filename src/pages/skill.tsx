import BlurText from "@components/effect/text/BlurText";
import CollapseBox from "@components/common/CollapseBox";
import {SkillTitle} from "@components/skill/SkillTitle";

export default function SkillPage() {

    return (
        <>
            <BlurText
                variant={"h4"}
                text={"기술"}
                fontWeight={700}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
            />

            <CollapseBox>
                <SkillTitle/>
            </CollapseBox>
        </>
    )
}
