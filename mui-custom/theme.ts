import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    // CSS 변수 + 다크/라이트 모드 지원
    cssVariables: {
        colorSchemeSelector: 'data', // <html data-mui-color-scheme="light|dark">
    },

    // 기본 내장 light/dark 스킴 사용
    colorSchemes: {
        light: true, // 기본 light 팔레트
        dark: true,  // 기본 dark 팔레트
    },
    typography:{
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
    }
});

export type AppTheme = typeof theme;
