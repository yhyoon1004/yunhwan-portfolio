import Layout from "@components/layout/Layout";
import {Box, Grid, Typography} from "@mui/material";


export default function Home() {


    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid size={{xs: 12, md: 6}}>
                    <Box >
                        <Typography component={'h2'} variant={'h3'}>
                            안녕하세요
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, md: 6}} >
                    22222222
                </Grid>
            </Grid>
        </Layout>
    );
}
