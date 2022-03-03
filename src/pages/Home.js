import { Box } from "@mui/material";

import AboutMe from "../components/sections/AboutMe";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
    return (
        <Box
            sx={{ padding: '2% 5%', pb: 400 }}
        >
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </Box>
    )
}