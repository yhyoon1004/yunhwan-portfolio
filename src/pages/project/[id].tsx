import {GetServerSidePropsContext} from "next";
import TypingEffectTitle from "@components/common/TypingEffectTitle";

const ProjectDetail = ({id}: { id: string }) => {


    return (
        <>
            <TypingEffectTitle title={"프로젝트 [ " + id + " ]"}/>

        </>
    )
}

export default ProjectDetail;


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id;

    return {
        props: {
            id: id,
        }
    }
}