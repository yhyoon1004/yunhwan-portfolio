import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import {useColorScheme} from '@mui/material/styles';

export default function ColorModeToggle() {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    // SSR → CSR 전환 시 hydration mismatch 방지용
    React.useEffect(() => {
        setMounted(true);
    }, []);

    // mode 는 최초 렌더에서 undefined 일 수 있음
    if (!mounted || !mode) {
        return null;
    }

    const toggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <Tooltip title={mode === 'light' ? '다크 모드' : '라이트 모드'}>
            <IconButton color="default" onClick={toggle}>
                {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}
            </IconButton>
        </Tooltip>
    );
}
