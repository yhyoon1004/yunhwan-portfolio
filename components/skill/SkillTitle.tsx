import {Box, Grid} from "@mui/material";
import RotatingText from "@components/effect/text/RotatingText";
import Typography from "@mui/material/Typography";
import useDeviceByClient from "../../hook/useDeviceByClient";

export const SkillTitle = () => {
    const deviceInfo = useDeviceByClient();
    const textArray = [
        "Java", "Spring", "SpringSecurity", "QueryDSL",
        "Typescript", "React", "Nextjs",
        "Bootstrap", "MUI",
        "Php", "Laravel",
        "AWS", "Azure",
        "Kubernetes",
    ];

    return (
        <div>
            <Box display={"flex"}
                 justifyContent={"center"}
                 alignItems={"center"}
                 overflow={"hidden"}
            >
                <Grid container spacing={{xs: 0, md: 1}}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            borderRadius={4}
                            borderColor={"#6794d5"}
                            bgcolor={"#2a3c59"}
                            pt={"0.25rem"}
                            overflow={"hidden"}
                        >
                            <RotatingText
                                component={"h2"}
                                variant={"h3"}
                                texts={textArray}
                                fontWeight={700}
                                style={{
                                    fontSize: deviceInfo == "mobile" ? "0.85rem" : "1.5rem",
                                    paddingLeft: "2rem", paddingRight: "2rem",
                                    marginLeft: "2rem", marginRight: "2rem"
                                }}
                                staggerFrom={"last"}
                                initial={{y: "100%"}}
                                animate={{y: 0}}
                                exit={{y: "-120%"}}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{type: "spring", damping: 30, stiffness: 400}}
                                rotationInterval={2500}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            textAlign={"center"}
                            overflow={"visible"}
                            noWrap={true}
                            pt={"0.25rem"}
                            fontWeight={700}
                            component="h2"
                            variant='h3'>
                            할 수 있어요!
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}