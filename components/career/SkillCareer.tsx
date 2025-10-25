import {keyframes, Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

export default function SkillCareer() {

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
                    <Typography variant={"body1"} color={"textSecondary"}>
                        kubernetes
                    </Typography>
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
                        docker
                    </Typography>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    )
}