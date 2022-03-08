import { Box, Typography } from "@mui/material"
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const LiveProject = ({ project: { title, description, stack, site } }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'background.medium',
                padding: '32px 16px',
                borderRadius: '5px',
                height: '100%',
            }}
        >
            <Box sx={{ textAlign: 'right' }}>
                <Box
                    //    component="a" href={site} target="_blank"
                    sx={{ mx: 2, color: 'text.grey' }}
                >
                    <OpenInBrowserIcon />
                </Box>
            </Box>
            <Typography component="p" sx={{ fontWeight: 700, }}>
                {title}
            </Typography>
            <Typography component="p" sx={{ py: 2, color: 'text.grey' }}>
                {description}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    pl: '2px',
                    color: 'text.grey'
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

        </Box>
    )
}

export default LiveProject