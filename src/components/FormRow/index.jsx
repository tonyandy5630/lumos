import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

export default function FormRow(props) {
    const {
        children,
        justifyContent = 'center',
        alignItems = 'start',
        pr = 20,
    } = props
    return (
        <Grid
            container
            spacing={5}
            minWidth="100%"
            justifyContent={justifyContent}
            alignItems={alignItems}
            sx={{ pr }}
        >
            {children}
        </Grid>
    )
}
