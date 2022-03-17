import { useEffect } from 'react';
import { Box } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionLayout = ({ children }) => {

    useEffect(() => {
        AOS.init({ once: true })
    }, [])

    return (
        <Box sx={{ pb: { xs: '100px', md: '200px' } }}
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
        >
            {children}
        </Box>
    )
}

export default SectionLayout