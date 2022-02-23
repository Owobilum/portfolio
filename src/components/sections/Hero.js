import { Typography, Box } from "@mui/material"

import { StyledLink } from "../StyledLink";
import { StyledButton } from "../StyledButton";
import { StyledHandEmoji } from "../StyledHandEmoji";

const Hero = () => {
    return (
        <Box sx={{ pb: { xs: '100px', md: '200px' } }}>
            <Typography variant="body1" component="p" color="text.secondary">
                Hi,<span><StyledHandEmoji /></span> my name is
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: 30, md: 70 },
                    my: 1
                }}
            >
                Lawrence Ikpebe.
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: 24, md: 65 },
                    my: 1
                }}
                color="text.grey"
            >
                I build things for the web.
            </Typography>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    maxWidth: 600,
                    fontSize: 20,
                }}
                color="text.grey"
            >
                I'm a software engineer specializing in building
                exceptional digital experiences. Currently, I'm focused on building accessible,
                human-centered products at <StyledLink href="https://irecharge.ng">iRecharge</StyledLink>.
            </Typography>
            <Box
                variant="outlined"
                sx={{
                    mt: 7,
                    py: 1,
                    width: { xs: '80%', md: '200px' },
                }}
            >
                <StyledButton>
                    View My Resume
                </StyledButton>
            </Box>

        </Box>
    )
}

export default Hero