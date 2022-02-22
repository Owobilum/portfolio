import { Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const classes = {
    icon: {
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        ":hover": {
            color: 'text.secondary',
            transform: 'translateY(-4px)'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'text.grey',
        display: 'inline',
        ":focus": {
            color: 'text.secondary',
        }
    },
    listItem: {
        my: 2,
    }
}

const SocialList = () => {

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 120,
                '::before': {
                    content: "''",
                    height: 100,
                    width: 13,
                    position: 'fixed',
                    bottom: 0,
                    borderRight: 'solid 1px',
                    borderColor: 'text.grey'
                }
            }}
        >
            <Box component="ul"
                sx={{
                    listStyleType: 'none',
                    padding: 0,
                }}
            >
                <Box component="li" sx={{ ...classes.listItem }}>
                    <Box component="a" href="https://linkedin.com/in/owobilum" target="_blank" sx={{ ...classes.link }}>
                        <LinkedInIcon sx={{ ...classes.icon }} />
                    </Box>
                </Box>
                <Box component="li" sx={{ ...classes.listItem }}>
                    <Box component="a" href="https://twitter.com/IkpebeL" target="_blank" sx={{ ...classes.link }}>
                        <TwitterIcon sx={{ ...classes.icon }} />
                    </Box>
                </Box>
                <Box component="li" sx={{ ...classes.listItem }}>
                    <Box component="a" href="https://github.com/Owobilum" target="_blank" sx={{ ...classes.link }}>
                        <GitHubIcon sx={{ ...classes.icon }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SocialList