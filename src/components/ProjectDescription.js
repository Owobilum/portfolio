import { Box, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const ProjectDescription = ({ data: { title, description, github, site, stack } }) => (
    <>
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                height: '33%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <Typography component="p"
                sx={{ fontSize: 13, color: 'text.secondary' }}
            >
                Featured Project
            </Typography>
            <Typography component="p"
                sx={{ fontSize: 18, textTransform: 'uppercase' }}
            >
                {title}
            </Typography>
        </Box>
        <Box
            sx={{
                position: 'absolute',
                top: '33%',
                right: 0,
                left: { xs: 0, md: -80 },
                zIndex: 2,
                height: '34%',
                backgroundColor: 'background.medium',
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
                px: '16px',
                borderRadius: '3px'
            }}
        >
            <Typography component="p">{description}</Typography>
        </Box>
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                height: '33%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                justifyContent: 'flex-end',
                fontSize: 13,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    pl: '2px'
                }}
            >
                {
                    stack && stack.map(tech => (
                        <Typography key={tech} component="p" sx={{ textTransform: 'capitalize' }}>
                            {tech}
                        </Typography>
                    ))
                }
            </Box>
            <Box
                sx={{ textAlign: 'right' }}
            >
                <Box component="a" href={github} target="_blank"
                    sx={{ mx: 2, color: 'text.icon' }}
                >
                    <GitHubIcon />
                </Box>
                <Box component="a" href={site} target="_blank"
                    sx={{ color: 'text.icon' }}
                >
                    <OpenInBrowserIcon />
                </Box>
            </Box>
        </Box>
    </>
)

export default ProjectDescription
