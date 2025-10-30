import dynamic from 'next/dynamic';
import Layout from "@components/layout/Layout";
import {Box, Grid, Grow, Typography} from "@mui/material";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import {TimeLineType} from "../../type/TypeCareer";
const CareerTimeLine = dynamic(() => import('@components/career/CareerTimeLine'), { ssr: false });


export default function CareerPage() {

    const socialTimeLine: TimeLineType[] = [
        {
            time: "현재",
            title: "뉴스1 재직중<br/>방통대 재학중",
        }, {
            time: "2025.09.01",
            title: "한국 방송통신대학교<br/>컴퓨터과학과 3학년 편입",
        }, {
            time: "2023.02.14",
            title: "서일대학교<br/>소프트웨어공학과 졸업",
        }, {
            time: "2022.12.12.",
            title: "뉴스1 디지털센터<br/>백엔드 개발자 입사",
        }, {
            time: "2020.03.30 ~ 2022.03.29",
            title: "육군 네트워크 운용정비병 입대<br/> 의병 전역, 중구 홍보반 소집해제<br/>",
        }, {
            time: "2018.03.02",
            title: "서일대학교 소프트웨어공학과 입학",
        }
    ];

    const techTimeLine: TimeLineType[] = [
        {
            time: "현재",
            title: "python, elastic search",
        },
        {
            time: "0",
            title: "kubernetes",
        },        {
            time: "1",
            title: "docker , github action, gitlab",
        },        {
            time: "2",
            title: "aws , cafe24",
        },        {
            time: "3",
            title: "node , react , nextjs , bootstrap",
        },        {
            time: "4",
            title: "subversion , git",
        },        {
            time: "5",
            title: "php , laravel",
        },        {
            time: "6",
            title: "QueryDSL , Spring Security , WebSocket",
        },        {
            time: "7",
            title: "SpringBoot , Spring Data JPA ",
        },        {
            time: "대학교",
            title: "Java , JSP , Mysql",
        },

    ]


    return (
        <Layout>

            <TypingEffectTitle title={" ⛹🏻 개발자 커리어"} />


            <Grid container spacing={2}>
                <Grow in={true} timeout={5000}>
                    <Grid size={6} height={550}>
                        <Typography variant={"h5"} component="h3" fontWeight={700}>
                            대외 커리어
                        </Typography>
                        <CareerTimeLine props={socialTimeLine} />
                    </Grid>
                </Grow>
                <Grow in={true} timeout={5000}>
                    <Grid size={6} height={550}>
                        <Typography variant={"h5"} component="h3" fontWeight={700}>
                            기술 커리어
                        </Typography>
                        <CareerTimeLine props={techTimeLine} />
                    </Grid>
                </Grow>
            </Grid>
        </Layout>
    )
}
