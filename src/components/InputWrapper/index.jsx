import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

export default function InputWrapper(props) {
    const { children, full, className } = props
    return (
        <Grid xs={full ? 12 : 6} className={className}>
            {children}
        </Grid>
    )
}
