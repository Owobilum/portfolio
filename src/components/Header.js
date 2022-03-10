import * as React from 'react';
import { Grid, Box, Typography, Toolbar, AppBar } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  React.useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <AppBar position="fixed" elevation={0} sx={{ px: '5%', py: 1, maxWidth: '100%' }}
      data-aos="fade-in"
      data-aos-delay="1000"
      data-aos-easing="ease-in-out"
    >
      <Toolbar disableGutters>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" sx={{ color: 'text.secondary', cursor: 'pointer' }}
            // onClick={() => window.location.replace('/')}
            >
              {"<DevLaw />"}
            </Typography>
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
                    // onClick={() => window.location.replace(`/portfolio-v2/#${item?.toLocaleLowerCase()}`)}
                    >
                      <a href={`#${item?.toLocaleLowerCase()}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Typography component={"span"} sx={{ color: 'text.secondary', fontSize: 13 }}>
                          {`0${index + 1}. `}
                        </Typography>
                        {item}
                      </a>
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
