import { Box, Typography, Grid } from '@mui/material'

import PortfolioProject from '../PortfolioProject'
import SectionHead from '../SectionHead'
import { porfolioProjectData, liveProjectData } from '../../utility/data/projectData'
import LiveProject from '../LiveProject'

const Projects = () => {
    return (
        <Box>
            <SectionHead place={'03'} title="Some Things I've Built" />
            <Typography component="p" sx={{ my: 5, color: 'text.secondary' }}>
                Portfolio Projects
            </Typography>
            {
                porfolioProjectData && porfolioProjectData.map((project) => (
                    <PortfolioProject key={project.title} project={project} />
                ))
            }
            <Typography component="p" sx={{ my: 5, color: 'text.secondary' }}>
                Live Projects
            </Typography>
            <Grid container spacing={2}>
                {
                    liveProjectData && liveProjectData.map((project) => (
                        <Grid item xs={12} md={4} key={project.title}
                            sx={{
                                transition: 'transform 0.25s ease-in-out',
                                ":hover": {
                                    color: 'text.secondary',
                                    transform: 'translateY(-8px)',
                                }
                            }}
                        >
                            <Box component="a" href={project.site} target="_blank"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'text.grey',
                                    ":hover": {
                                        color: 'text.secondary'
                                    }
                                }}
                            >
                                <LiveProject project={project} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Projects