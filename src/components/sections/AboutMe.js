import { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import SectionHead from '../SectionHead'
import lawrence from "../../images/lawrence.jpg"
import { StyledLink } from "../StyledLink";


const AboutMe = () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Box
            sx={{ pb: { xs: '100px', md: '200px' } }}
        >
            <Box sx={{ mb: 5 }}>
                <SectionHead place={"01"} title={"About Me"} />
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}
                    sx={{
                        paddingRight: { xs: 0, md: 5 },
                        mb: 3
                    }}
                >
                    <Typography variant="body1" component="p" sx={{ mb: 3 }}>
                        My name is Lawrence Owobilum Ikpebe and I enjoy building web
                        applications. My interest in web development started in 2016
                        when I built built a website for a small business I had started
                        with some friends. The ability to create such value with your mind
                        being the only necessary capital, was amazing to me. I was hooked.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Fast-forward to today and I lead a team of seven front-end engineers
                        at <StyledLink href="https://irecharge.ng">iRecharge</StyledLink>, building
                        applications that provide value to millions of customers and mentoring
                        younger developers.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: { xs: '100%', md: '300px' },
                            height: { xs: 'auto', md: '300px' },
                            position: 'relative',
                            display: 'block',
                            "::after": {
                                content: "''",
                                color: 'red',
                                border: 'solid',
                                borderColor: 'text.secondary',
                                borderRadius: '5px',
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                left: isHovered ? 15 : 20,
                                top: isHovered ? 15 : 20,
                                zIndex: -1,
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={lawrence}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '5px',
                                filter: isHovered ? 'none' : 'grayscale(100%)'
                            }}
                        >

                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe