import React, { useState } from 'react'
import { Box } from "@mui/material"

import ProjectDescription from './ProjectDescription';

const PortfolioProject = ({ project: { title, img, description, stack, github, site } }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Box
            sx={{
                display: 'flex',
                height: 350,
                position: 'relative',
                my: 3
            }}
        >
            {/* ONE */}
            <Box
                sx={{ flex: 2, }}
            >
                <Box component="a" href={site} target="_blank">
                    <Box component="img" src={img}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top left',
                            borderRadius: '3px',
                            filter: isHovered ? 'none' : 'grayscale(100%)'
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >

                    </Box>
                </Box>

            </Box>

            {/* TWO */}
            <Box
                sx={{
                    flex: 1,
                    position: { xs: 'absolute', md: 'relative' },
                    top: { xs: 0, sm: '' },
                    bottom: { xs: 0, sm: '' },
                    left: { xs: 0, sm: '' },
                    right: { xs: 0, sm: '' },
                    opacity: { xs: 0.9, md: 1 },
                    backgroundColor: 'background.default',
                    color: 'text.grey'
                }}
            >
                <ProjectDescription data={{ description, title, site, github, stack }} />
            </Box>
        </Box>
    )
}

export default PortfolioProject