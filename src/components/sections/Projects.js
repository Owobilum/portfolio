import { Box, Typography } from '@mui/material'

import PortfolioProject from '../PortfolioProject'
import SectionHead from '../SectionHead'
import { porfolioProjectData } from '../../utility/data/portfolioProjectData'

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
        </Box>
    )
}

export default Projects