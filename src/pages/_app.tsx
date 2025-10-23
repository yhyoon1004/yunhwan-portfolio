import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {blue} from "@mui/material/colors";

export default function App({ Component, pageProps }: AppProps) {
    const darkTheme = createTheme({
        colorSchemes: {
            dark: true
        },
        // palette: {
        //     primary: {
        //         main: '#0d47a1',
        //     },
        //     secondary: blue,
        // },
        typography: {
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )

}
