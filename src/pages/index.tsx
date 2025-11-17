import Layout from "@components/layout/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {motion} from "motion/react";

export default function Home() {


    return (
        <Layout>

            <Box height={"80vh"}>
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1, transition: {duration: 1}}}
                    exit={{opacity: 0, scale: 0.9}}
                >
                    <Box sx={{
                        width: '100%',
                        height: '100vh',
                    }}>
                        <Typography variant={"h4"}>안녕하세요</Typography>
                    </Box>

                </motion.div>

                <Box sx={{
                    width: '100%',
                    height: '100vh',
                }}>
                    <Typography>반가워요</Typography>
                </Box>

            </Box>
        </Layout>
    );
}
