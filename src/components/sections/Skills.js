import { Box, Grid, Tooltip } from "@mui/material"

import SectionHead from "../SectionHead"
import { skillsData } from "../../utility/data/skillsData"

const Skills = () => {
    return (
        <Box>
            <SectionHead place={"02"} title={"My Skills"} />
            <Grid container
                sx={{ pb: { xs: '100px', md: '200px' }, px: '5%', maxWidth: '100%', ml: '1px', my: 1, }}
                spacing={5}
            >
                {
                    skillsData && skillsData.map(({ name, logo }) => (
                        <Grid item xs={4} md={2} key={name}>
                            <Tooltip title={name} placement="top">
                                <Box component="img" src={logo} alt={name}
                                    sx={name !== "Next" ? { width: '100%' } : { width: '100%', backgroundColor: '#fff', px: 1 }}
                                >
                                </Box>
                            </Tooltip>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}

export default Skills