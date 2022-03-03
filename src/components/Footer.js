import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography component="p">
                Built by Lawrence Ikpebe
            </Typography>
            <Typography component="p" sx={{ display: { xs: 'block', md: 'none' } }}>
                Lawrenceikpebe@gmail.com
            </Typography>
        </Box>
    )
}

export default Footer