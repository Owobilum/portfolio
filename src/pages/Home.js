import { Box } from "@mui/material";

import AboutMe from "../components/sections/AboutMe";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";

export default function Home() {
    return (
        <Box
            sx={{ padding: '2% 5%' }}
        >
            <Hero />
            <AboutMe />
            <Skills />
        </Box>
    )
}