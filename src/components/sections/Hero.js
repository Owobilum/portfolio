import { Typography, Box } from "@mui/material"

import { StyledLink } from "../StyledLink";
import { StyledButton } from "../StyledButton";
import { StyledHandEmoji } from "../StyledHandEmoji";
import SectionLayout from "../SectionLayout";

const Hero = () => {
    return (
        <SectionLayout>
            <Typography variant="body1" component="p" color="text.secondary" sx={{ mt: '100px' }}>
                Hi,<span><StyledHandEmoji /></span> my name is
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: 30, md: 55 },
                    my: 1
                }}
            >
                Lawrence Ikpebe.
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: 24, md: 45 },
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
                    maxWidth: 700,
                    fontSize: 20,
                }}
                color="text.grey"
            >
                <span style={{paddingRight:4}}>
                    I'm a Front-end Engineer specializing in building
                    exceptional digital experiences. Currently, I'm focused on building accessible,
                    human-centered products at
                </span>  
                 <StyledLink href="https://www.istrategytech.com/" target="_blank">
                     Infostrategy-tech (iRecharge)
                </StyledLink>.
            </Typography>
            <Box
                variant="outlined"
                sx={{
                    mt: 7,
                    py: 1,
                    width: { xs: '80%', md: '200px' },
                }}
            >
                <StyledButton
                    href="https://drive.google.com/file/d/1sPgB1izHhbfPxfcPDf8Rka4e3ihxYV4m/view?usp=sharing"
                    target="_blank"
                >
                    View My Resume
                </StyledButton>
            </Box>
        </SectionLayout>
    )
}

export default Hero