import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
    const darkTheme = createTheme({
        colorSchemes: {
            dark: true
        },
        typography: {
            fontFamily: 'Noto Sans KR',
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )

}
