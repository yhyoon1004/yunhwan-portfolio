import {useColorScheme} from "@mui/material";

export default function LayoutHeader() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <header>
            <div>헤더</div>
            <div>
                <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    {mode === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
        </header>
    )
}