import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';

import ThemeToggle from './ThemeToggle';

export default function MobileDrawer({ isOpen, toggleDrawer, navItems }) {

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box component="nav" sx={{ pt: 5 }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {
                        navItems && navItems.map((item, index) => (
                            <Typography
                                component="li"
                                key={index}
                                sx={{
                                    textDecoration: 'none',
                                    my: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <a href={`#${item?.toLocaleLowerCase()}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Typography component={"span"} variant="body1" sx={{ color: 'text.secondary' }}>{`0${index + 1}.`}<br /></Typography>
                                    {item}
                                </a>
                            </Typography>
                        ))
                    }
                </ul>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ThemeToggle />
            </Box>
        </Box>
    );

    return (
        <React.Fragment>
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer
                anchor={'right'}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </React.Fragment>
    );
}
