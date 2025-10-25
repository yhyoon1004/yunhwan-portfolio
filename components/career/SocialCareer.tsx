import {keyframes, Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {number} from "prop-types";

const SocialCareer = () => {
    const sxPulse =
        keyframes`
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.6);
            }
            50% {
                transform: scale(1.15);
                box-shadow: 0 0 0 6px rgba(25, 118, 210, 0.0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.0);
            }
        `;
    const durationMs = 1200

    return (
        <Timeline position="right"
                  sx={{
                      height: "100%",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 4, p: 2
                  }}>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>현재</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{
                        bgcolor: "primary.main",
                        position: "relative",
                        animation: `${sxPulse} ${durationMs}ms ease-in-out infinite`,
                        "@media (prefers-reduced-motion: reduce)": {animation: "none"},
                    }}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>뉴스1 재직중</Typography>
                    <Typography variant={"body1"} color={"textSecondary"}>방통대 재학중</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>2025.09.01 </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        한국 방송통신대학교 <br/>
                        컴퓨터과학과 3학년 편입
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>2023.02.14 </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        서일대학교 <br/>
                        소프트웨어공학과 졸업
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>2022.12.12. </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        뉴스1 디지털센터<br/>
                        백엔드 개발자 입사
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>
                        2020.03.30 ~ 2022.03.29
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        서울 중구시설관리공단 <br/>
                        전략기획실 홍보반 <br/>
                        의병 전역 및 소집해제<br/><br/>
                        육군 네트워크 운용정비병 입대
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant={"body1"}>2018.03.02 </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        서일대학교 소프트웨어공학과 입학
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default SocialCareer;