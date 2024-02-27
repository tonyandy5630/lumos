import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

export default function FormRow({ children }) {
    return (
        <Grid
            container
            spacing={5}
            minWidth="100%"
            justifyContent="center"
            alignItems="start"
            sx={{ pr: 20 }}
        >
            {children}
        </Grid>
    )
}
