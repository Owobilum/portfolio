import React from 'react'
import { Grid, Box } from '@mui/material'

import Home from '../pages/Home'
import Header from './Header'
import NavEmail from './NavEmail'
import SocialList from './SocialList'
import Footer from './Footer'

const Layout = () => {

    return (
        <Box sx={{ maxWidth: { xl: '1800px' }, mx: { xl: 'auto' } }}>
            <Header />
            <Grid container
                sx={{
                    px: '3%',
                }}
            >
                <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <SocialList />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Home />
                </Grid>
                <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <NavEmail />
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}

export default Layout