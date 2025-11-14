import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/material/Avatar';
import {useRouter} from "next/router";
import ColorModeToggle from "@custom-mui/ColorModeToggle";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export default function NavBar() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const MenuItems = new Map<string, string>(
        [
            ["프로젝트", "/project"],
            ["커리어", "/career"],
            ["자기소개", "/intro"],
            ["기술", "/skill"],
            ["자격증", "/certification"],
        ]
    );

    const sxMenuFont = {
        fontWeight: 700,
        color: 'text.primary',
        textDecoration: 'none',
        lineHeight: 1,
    }

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
                zIndex: 2,
                opacity: 0.8
            }}
        >
            <Container sx={{backgroundColor: 'transparent',}} maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    {/*PC*/}
                    <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', mr: 5,
                            cursor: "grab"
                        }}
                             onClick={(e) => {
                                 e.preventDefault();
                                 router.push('/');
                             }}
                        >
                            <Avatar src="/images/yh-mmg.png" alt="sung yunhwan"/>
                            <Typography sx={{...sxMenuFont,mt:0.5}} px={2}>{"개발자 윤환"}</Typography>
                        </Box>


                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            {
                                Array.from(MenuItems).map(([name, path]) => (
                                    <Button variant="text" color="info" size="large" sx={sxMenuFont} key={name}
                                            href={path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.push(path);
                                            }}
                                    >
                                        {name}
                                    </Button>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: {xs: 'none', md: 'flex'},
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button color="primary" variant="text" size="large"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('https://renteasy.co.kr/');
                                }}
                                sx={sxMenuFont}>
                            렌팅
                        </Button>
                        <Button color="primary" variant="text" size="large"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('https://github.com/yhyoon1004');
                                }}
                                sx={sxMenuFont}>
                            GitHub
                        </Button>
                        <ColorModeToggle/>
                    </Box>

                    {/*모바일*/}
                    <Box sx={{display: {xs: 'flex', md: 'none'}, gap: 1}}>
                        <ColorModeToggle/>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{p: 2, backgroundColor: 'background.default'}}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon/>
                                    </IconButton>
                                </Box>
                                {
                                    Array.from(MenuItems).map(([name, path]) => (
                                        <MenuItem key={name}
                                                  onClick={(e) => {
                                                      e.preventDefault();
                                                      router.push(path)
                                                  }}
                                                  sx={sxMenuFont}>
                                            {name}
                                        </MenuItem>
                                    ))
                                }
                                <Divider sx={{my: 3}}/>
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push('https://renteasy.co.kr/');
                                        }}
                                        variant="text" fullWidth>
                                        렌팅
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push('https://github.com/yhyoon1004');
                                        }}
                                        variant="text" fullWidth>
                                        GitHub
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
