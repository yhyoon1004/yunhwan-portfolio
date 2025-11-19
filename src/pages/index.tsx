import Layout from "@components/layout/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {motion, useTransform} from "motion/react";
import {useScroll} from "framer-motion";
import {Grid} from "@mui/material";

const MotionBox = motion.create(Box);
const MotionTypo = motion.create(Typography);
const MotionGrid = motion.create(Grid);


export default function Home() {

    return (
        <Layout>
            <Box id="hero-section"
                 sx={{
                     paddingTop: {xs: "20px", md: "40px"}, px: 2,
                     minHeight: "80vh",
                 }}>
                <Box id="hero-title" paddingBottom={2}>
                    {
                        ["안녕하세요,", "Web Developer 윤환의 사이트입니다!"].map((text, index) => (
                            <MotionTypo key={"hero-text-" + index}
                                        sx={{
                                            fontSize: {xs: "2rem", md: '2.5rem'},
                                            lineHeight: {xs: 0.9, md: 1},
                                            fontWeight: 700
                                        }}
                                        initial={{opacity: 0, y: 40}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1, delay: !index ? 0.3 : 0.5}}
                            >
                                {text}
                            </MotionTypo>
                        ))
                    }
                </Box>

                <Grid id={"hero-describe"} container spacing={2}>
                    <MotionGrid
                        size={12}
                        initial={{opacity: 0, x: -40}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        sx={{position: "relative"}}
                    >
                        <Box component={"img"}
                             src={"/images/yh-dark-bg.jpg"}
                             sx={{
                                 width: "100%", minHeight: {xs: 250, md: 550},
                                 borderRadius: 4,
                                 opacity: 0.85,
                                 backdropFilter: 'blur(10px)',
                                 aspectRatio: 5 / 3
                             }}
                             draggable={false}
                        />
                        <MotionTypo
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 1, delay: 0.5}}
                            sx={{
                                position: {xs: "relative", md: "absolute"},
                                top: {xs: 'none', md: "10%"}, right: {xs: 'none', md: "5%"},
                                color: "text.secondary", textShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
                                wordBreak: "keep-all",
                                fontWeight: 700,
                                lineHeight: 1.4,
                                fontSize: {xs: "1rem", md: "1.5rem"},
                                textAlign: {xs: "center", md: "right"},
                                borderRight: {xs: "none", md: "2px solid"},
                                borderColor: "#979797",
                                pr: {xs: 0, md: 1},
                            }}
                        >
                            아이디어를 서비스로 만들어냅니다 <br/>
                            프로그램 소스코드를 만들고 관리합니다 <br/>
                            프로그램을 가상화하여 배포까지 자동화시킵니다 <br/>
                        </MotionTypo>
                    </MotionGrid>
                </Grid>
            </Box>

            <MotionBox id="feature-section" sx={{padding: "10vh 0"}}>

            </MotionBox>
        </Layout>
    );
}
