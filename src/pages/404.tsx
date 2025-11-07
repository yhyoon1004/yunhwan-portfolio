import Layout from "@components/layout/Layout";
import FuzzyText from "@components/effect/text/FuzzyText";
import {Box} from "@mui/material";

export default function ErrorPage () {


    return (
        <Layout>
            <Box margin={"auto"} height={{xs: 400, md: 500}} textAlign={"center"}>
                404 <br/>
                not found
            </Box>

        </Layout>
    )
}