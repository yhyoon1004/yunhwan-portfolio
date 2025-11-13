import Layout from "@components/layout/Layout";
import Box from "@mui/material/Box";
import {liquidGlassSx} from "../../mui/sx/LiquidGlassSx";


export default function Home() {

    return (
        <Layout>
            <Box sx={{height:500,...liquidGlassSx}}>
                Hello World
            </Box>
        </Layout>
    );
}
