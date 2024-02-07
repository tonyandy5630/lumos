import React from 'react'
import Typography from '@mui/material/Typography'

export default function BookingInfo(props) {
    return (
        <div className="flex items-center min-w-16 space-x-1">
            <Typography variant="subtitle1" className="text-gray-500 min-w-10">
                {props.title}:
            </Typography>
            <Typography fontWeight="bold" className="text-mosh mx-1">
                {props.children}
            </Typography>
        </div>
    )
}
