import React from 'react'
import Typography from '@mui/material/Typography'

export default function PageTitle(props) {
    return (
        <div className="flex items-center justify-start min-w-full">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {props.children}
            </Typography>
        </div>
    )
}
