import { Box, Typography, Stack } from '@mui/material'

const Contact = () => {
    return (
        <Stack
            spacing={2}
            sx={{
                maxWidth: { xs: 300, md: 600 },
                textAlign: 'center',
                margin: '0 auto',
                padding: '100px 0'
            }}
        >
            <Typography component="p" color="text.secondary">
                04. What's Next?
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 30, md: 50 }, fontWeight: 700 }}>
                Get In Touch
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 16, md: 20 } }}>
                I'm currently open to new opportunites. Also,
                whether you have a question or just want to say hi,
                my inbox is open. I'll get back to you ASAP!
            </Typography>
            <Box sx={{ padding: '20px 30px' }}>
                <Box component="a" href="mailto:lawrenceikpebe@gmail.com"
                    sx={{
                        border: '1px solid',
                        borderColor: 'text.secondary',
                        borderRadius: '5px',
                        padding: '20px 30px',
                        textDecoration: 'none',
                        color: 'text.secondary',
                        ":hover": {
                            background: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    Say Hello
                </Box>
            </Box>
        </Stack>
    )
}

export default Contact