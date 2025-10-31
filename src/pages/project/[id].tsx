import {GetServerSidePropsContext} from "next";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import Layout from "@components/layout/Layout";

const ProjectDetail = ({id}: { id: string }) => {


    return (
        <Layout>
            <TypingEffectTitle title={"프로젝트 [ " + id + " ]"}/>

        </Layout>
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