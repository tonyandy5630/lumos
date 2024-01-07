import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
const avatarWidth = 60
export default function ReviewTab(props) {
    return (
        <Grid xs={6} className="grid p-4 rounded-3xl min-h-56">
            <Paper elevation={10} className="grid h-full">
                <Stack
                    direction="row"
                    className="p-3"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar sx={{ width: avatarWidth, height: avatarWidth }} />
                    <Stack justifyContent="flex-start" alignItems="start">
                        <Typography variant="h5" textTransform="capitalize">
                            {props.name}
                        </Typography>
                        <Rating value={5} readOnly precision={0.5} />
                    </Stack>
                </Stack>
                <Typography paragraph fontSize="15px" className="self-end p-3">
                    {props.children}
                </Typography>
            </Paper>
        </Grid>
    )
}
