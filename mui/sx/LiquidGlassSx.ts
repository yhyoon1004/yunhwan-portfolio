import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

export const liquidGlassSx: SxProps<Theme> = (theme: Theme) => ({

    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,

    // 유리 느낌
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',

    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,

    // 다크/라이트 둘 다 대응되는 리퀴드 글라스 배경
    backgroundColor: theme.vars
        ? theme.palette.mode === 'dark'
            // 다크: 거의 블랙에 가까운 반투명
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.65)`
            // 라이트: 흰 배경 위 살짝 유리 느낌
            : `rgba(${theme.vars.palette.background.paperChannel} / 0.6)`
        : theme.palette.mode === 'dark'
            ? theme.palette.background.default + 'A6' // 약 65% 불투명
            : theme.palette.background.paper + '99',   // 약 60% 불투명

    boxShadow: (theme.vars || theme).shadows[1],

    padding: '8px 12px',
});