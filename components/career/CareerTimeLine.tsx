import parse from "html-react-parser";
import {keyframes, Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {TimeLineType} from "../../type/TypeCareer";

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

const CareerTimeLine = ({props}:{props:TimeLineType[]}) => {
    if (!props) return null;

    return (
        <Timeline position="right"
                  sx={{
                      height: "100%",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 4, p: 2,
                      overflow: "auto",
                      scrollbarWidth: "none",
                      msOverflowStyle: 'none',      // IE/Edge(구)
                      '&::-webkit-scrollbar': {     // Chrome/Safari/Edge(Chromium)
                          display: 'none',
                      },
                      // 선택: 터치 스크롤 감도 개선(모바일 사파리)
                      WebkitOverflowScrolling: 'touch',
                  }}>
            {
                props.map((item, index) => (
                    <TimelineItem key={item.title}>
                        <TimelineOppositeContent>
                            <Typography variant={"body1"}>{parse(item.time)}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={
                                index == 0
                                    ? {
                                        bgcolor: "primary.main",
                                        position: "relative",
                                        animation: `${sxPulse} ${durationMs}ms ease-in-out infinite`,
                                        "@media (prefers-reduced-motion: reduce)": {animation: "none"},
                                    }
                                    : null
                            }/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography component="div"
                                        variant={"body1"}
                                        color={"textSecondary"}
                                        sx={{whiteSpace: "normal", wordBreak: "break-word"}}>
                                {parse(item.title)}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent/>
            </TimelineItem>
        </Timeline>
    );
}

export default CareerTimeLine;