import React from 'react'
import Typography from '@mui/material/Typography'

export default function PrimaryName(props) {
    const { children, className } = props
    return (
        <Typography
            variant="h5"
            fontWeight="bold"
            className={`${className} text-mosh`}
        >
            {children}
        </Typography>
    )
}
