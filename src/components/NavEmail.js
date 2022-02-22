import { Box } from '@mui/material'

const classes = {
    icon: {
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        ":hover": {
            color: 'text.secondary',
            transform: 'translateY(-4px)',
        }
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

const NavEmail = () => {
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
                <Box component="li" sx={{ ...classes.listItem, writingMode: 'vertical-rl' }}>
                    <Box
                        component="a"
                        href="mailto:lawrenceikpebe@gmail.com"
                        sx={{ ...classes.link }}
                    >
                        <Box sx={{ ...classes.icon }}>lawrenceikpebe@gmail.com</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NavEmail