import * as React from "react";
import {Box} from "@mui/material";
import {ReactElement} from "react";

function NeonRainbowButton({children}: { children: ReactElement }) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-block",
                borderRadius: 4,          // pill 모양
                p: "2px",                    // border 두께처럼 보이는 부분
                boxShadow: "0 0 25px rgba(141, 90, 255, 0.6)", // 전체 네온 발광
                background:
                    "linear-gradient(90deg,#4df5ff,#6d5bff,#ff46c7,#ffd447,#4df5ff)",
                backgroundSize: "300% 300%",
                animation: "neonRainbow 4s linear infinite alternate",
                "@keyframes neonRainbow": {
                    "0%": {backgroundPosition: "0% 50%"},
                    "100%": {backgroundPosition: "100% 50%"},
                },
            }}
        >
            <Box sx={{
                borderRadius: 4,
                px: 4,
                py: 1.5,
                minWidth: 200,
                backgroundColor: "rgba(3, 6, 32, 0.96)", // 안쪽 어두운 배경
                justifyContent: "center",
                gap: 1.5,
                boxShadow: "0 0 20px rgba(0,0,0,0.7) inset",
                "&:hover": {
                    backgroundColor: "rgba(10, 20, 60, 0.98)",
                },
            }}
            >
                {children}
            </Box>
        </Box>
    );
}

export const NeonBoxOfMemo = React.memo(NeonRainbowButton);
