import { Box, Typography } from '@mui/material'

const SectionHead = ({ place, title }) => {
    return (
        <Typography component="h2"
            sx={{
                position: 'relative',
                "::after": {
                    content: "''",
                    position: 'absolute',
                    bottom: '50%',
                    width: { xs: '15%', md: '20%' },
                    marginLeft: '5%',
                    borderBottom: 'solid 1px',
                    borderColor: 'text.grey'
                }
            }}
        >
            <Box
                component="span"
                sx={{
                    color: 'text.secondary',
                    fontSize: { xs: 16, sm: 20, md: 32 },
                    marginRight: '8px'
                }}
            >
                {place}.
            </Box>
            <Box
                component="span"
                sx={{
                    color: 'text.primary',
                    fontSize: { xs: 16, sm: 20, md: 32 },
                    fontWeight: 700
                }}
            >
                {title}
            </Box>
        </Typography>
    )
}

export default SectionHead