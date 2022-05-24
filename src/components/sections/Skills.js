import React from 'react'
import { Box, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material"

import SectionHead from "../SectionHead"
import { skillsData } from "../../utility/data/skillsData"
import SectionLayout from "../SectionLayout"

const Skills = () => {
    const isMobile = useMediaQuery('(max-width:599px)')

    const classes = {
        skill: {
            transition: 'transform 0.2s ease-in-out',
            ":hover": {
                color: 'text.secondary',
                transform: 'translateY(-4px)'
            },
        }
    }

    return (
        <SectionLayout>
            <SectionHead place={"02"} title={"My Skills"} id="skills" />
            <Typography
                component="p"
                sx={{
                    color: 'text.grey',
                    my: 3,
                    maxWidth: 600
                }}
            >
                I love learning! I'm currently learning about Web3 (Ethers JS and Solidity).
                Below is a list of technologies I've worked with recently:
            </Typography>
            <Grid container
                sx={{ px: '5%', maxWidth: '100%', ml: '1px', my: 1, }}
                spacing={isMobile ? 2 : 4}
            >
                {
                    skillsData && skillsData.map(({ name, logo }) => (
                        <Grid item xs={4} md={2} key={name} sx={{...classes.skill}}>
                            {isMobile && 
                                <Typography component="p" variant="body2" sx={{color: 'text.grey'}}>
                                    {name}
                                </Typography>
                            }
                            <Tooltip title={name} placement="top">
                                <Box component="img" src={logo} alt={name}
                                    sx={name !== "Next" ? { width: '100%' } : { width: '100%', backgroundColor: '#fff', px: 1 }}
                                >
                                </Box>
                            </Tooltip>
                        </Grid>
                    ))
                }
            </Grid>
        </SectionLayout>
    )
}

export default Skills