import { Box } from '@mui/material'

const SectionLayout = ({ children }) => {
    return (
        <Box sx={{ pb: { xs: '100px', md: '200px' } }}>
            {children}
        </Box>
    )
}

export default SectionLayout