import Layout from "@components/layout/Layout";
import {Box, Grid, Typography} from "@mui/material";
import SocialCareer from "@components/career/SocialCareer";
import SkillCareer from "@components/career/SkillCareer";


export default function CareerPage() {

    return (
        <Layout>
            <Typography variant="h4" component="h2" fontWeight={700}>
                ⛹🏻 개발자 커리어
            </Typography>

            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant={"h5"} component="h3" fontWeight={700}>
                        대외 커리어
                    </Typography>
                    <SocialCareer/>
                </Grid>
                <Grid size={6}>
                    <Typography variant={"h5"} component="h3" fontWeight={700}>
                        기술 커리어
                    </Typography>
                    <SkillCareer/>
                </Grid>
            </Grid>
        </Layout>
    )
}
