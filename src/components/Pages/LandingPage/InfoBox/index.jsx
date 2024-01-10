import React from 'react'
import Typography from '@mui/material/Typography'

export default function InfoBox(props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white' }}>
                {props.children}
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{ color: 'white', fontSize: '15px' }}
            >
                {props.title}
            </Typography>
        </div>
    )
}
