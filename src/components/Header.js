import * as React from 'react';
import { Grid, Box, Typography, Toolbar, AppBar } from '@mui/material'

import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';

const navItems = ['About', 'Skills', 'Work', 'Contact']

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ px: '5%', maxWidth: '100%' }}>
      <Toolbar disableGutters>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <h1 style={{ color: '#61F8D5' }}>Logo</h1>
          </Grid>
          <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
            <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} navItems={navItems} />
          </Grid>
          <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Box component="nav">
              <ul>
                {
                  navItems && navItems.map((item, index) => (
                    <Typography
                      component="li"
                      key={index}
                      sx={{
                        textDecoration: 'none',
                        display: 'inline-block',
                        mx: 2,
                        cursor: 'pointer',
                        ":hover": {
                          color: 'text.secondary'
                        },
                        fontSize: 13
                      }}
                    >
                      <Typography component={"span"} sx={{ color: 'text.secondary', fontSize: 13 }}>
                        {`0${index + 1}. `}
                      </Typography>
                      {item}
                    </Typography>
                  ))
                }
              </ul>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeToggle />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
