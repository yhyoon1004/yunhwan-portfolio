import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {motion} from "motion/react";
import {Grid} from "@mui/material";

const MotionBox = motion.create(Box);
const MotionTypo = motion.create(Typography);
const MotionGrid = motion.create(Grid);


export default function Home() {

    return (
        <>
            <Box id="hero-section"
                 sx={{
                     pt: 2, px: 2,
                     minHeight: "80vh",
                 }}>
                {/*<Box id="hero-title" paddingBottom={2}>*/}
                {/*    {*/}
                {/*        ["화면부터 배포•운영까지,"," 웹 서비스 개발자 윤환입니다."].map((text, index) => (*/}
                {/*            <MotionTypo key={"hero-text-" + index}*/}
                {/*                        sx={{*/}
                {/*                            display: 'inline',*/}
                {/*                            fontSize: {xs: "2rem", md: '2.5rem'},*/}
                {/*                            lineHeight: {xs: 0.9, md: 1.1},*/}
                {/*                            fontWeight: 700*/}
                {/*                        }}*/}
                {/*                        initial={{opacity: 0, y: 20}}*/}
                {/*                        animate={{opacity: 1, y: 0}}*/}
                {/*                        transition={{duration: 1, delay: !index ? 0.3 : 0.5}}*/}
                {/*            >*/}
                {/*                {text}*/}
                {/*            </MotionTypo>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Box>*/}

                {/*<Grid id={"hero-describe"} container spacing={2}>*/}
                {/*    <MotionGrid*/}
                {/*        size={{xs: 12, md: 7}}*/}
                {/*        initial={{opacity: 0, x: -40}}*/}
                {/*        animate={{opacity: 1, x: 0}}*/}
                {/*        transition={{duration: 1, delay: 0.5}}*/}
                {/*        sx={{position: "relative"}}*/}
                {/*    >*/}
                {/*        <Box component={"img"}*/}
                {/*             src={"/images/yh-dark-bg.webp"}*/}
                {/*             sx={{*/}
                {/*                 width: "100%", minHeight: {xs: 250, md: 450},*/}
                {/*                 borderRadius: 4,*/}
                {/*                 opacity: 0.85,*/}
                {/*                 backdropFilter: 'blur(10px)',*/}
                {/*                 aspectRatio: 5 / 3*/}
                {/*             }}*/}
                {/*             draggable={false}*/}
                {/*        />*/}

                {/*    </MotionGrid>*/}
                {/*    <MotionGrid size={{xs: 12, md: 5}} sx={{position: "relative"}}>*/}
                {/*        <MotionTypo*/}
                {/*            initial={{opacity: 0, x: 50}}*/}
                {/*            animate={{opacity: 1, x: 0}}*/}
                {/*            transition={{duration: 1, delay: 0.5}}*/}
                {/*            sx={{*/}
                {/*                color: "text.secondary", textShadow: "0 0 2px rgba(0, 0, 0, 0.5)",*/}
                {/*                wordBreak: "keep-all",*/}
                {/*                fontWeight: 700,*/}
                {/*                lineHeight: 1.5,*/}
                {/*                fontSize: {xs: "1rem", md: "1.4rem"},*/}
                {/*                textAlign: {xs: "center", md: "left"},*/}
                {/*                borderLeft: {xs: "none", md: "2px solid"},*/}
                {/*                borderColor: "#979797",*/}
                {/*                pl: {xs: 0, md: 1},*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            구현 위주 프론트엔드 개발<br/>*/}
                {/*            구조와 데이터 흐름 위주 백엔드 개발<br/>*/}
                {/*            Docker와 Git을 이용한 빌드·배포 파이프 구성<br/>*/}
                {/*            가상 호스팅 환경에 웹 서비스를 운영 경험 <br/>*/}
                {/*            K8S 와 UI에 집중하며 역량을 넓혀가고 있습니다. <br/>*/}
                {/*        </MotionTypo>*/}

                {/*    </MotionGrid>*/}
                {/*</Grid>*/}
            </Box>

            <MotionBox id="feature-section" sx={{padding: "10vh", height: "100vh"}}>

            </MotionBox>
        </>
    );
}
