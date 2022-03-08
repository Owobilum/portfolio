import * as React from 'react';
import { Grid, Box, Typography, Toolbar, AppBar } from '@mui/material'

import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';

const navItems = ['About', 'Skills', 'Projects', 'Contact']

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
            <Typography variant="h4" sx={{ color: 'text.secondary' }}>Logo</Typography>
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
                        color: 'text.grey',
                        ":hover": {
                          color: 'text.secondary'
                        },
                        fontSize: 13
                      }}
                      onClick={() => window.location.replace(`/#${item?.toLocaleLowerCase()}`)}
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
