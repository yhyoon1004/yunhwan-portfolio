import { alpha, type Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const liquidGlassSx = (theme: Theme): SystemStyleObject<Theme>  => ({
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.16)`
        : alpha(theme.palette.background.default, 0.16),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
    // 스크롤 영역일 때도 모양 유지
    overflow: 'hidden',
});
