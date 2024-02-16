import React from 'react'
import Typography from '@mui/material/Typography'

export default function PrimaryName({ children }) {
    return (
        <Typography variant="h5" fontWeight="bold" className="text-mosh">
            {children}
        </Typography>
    )
}
