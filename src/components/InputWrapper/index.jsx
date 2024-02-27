import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

export default function InputWrapper(props) {
    const { children, full } = props
    return <Grid xs={full ? 12 : 6}>{children}</Grid>
}
