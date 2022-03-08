import { Box, Grid, Tooltip } from "@mui/material"

import SectionHead from "../SectionHead"
import { skillsData } from "../../utility/data/skillsData"
import SectionLayout from "../SectionLayout"

const Skills = () => {
    return (
        <SectionLayout>
            <SectionHead place={"02"} title={"My Skills"} />
            <Grid container
                sx={{ px: '5%', maxWidth: '100%', ml: '1px', my: 1, }}
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
        </SectionLayout>
    )
}

export default Skills