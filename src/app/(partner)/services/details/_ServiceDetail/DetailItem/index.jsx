import React from 'react'
import Typography from '@mui/material/Typography'

export default function DetailItem(props) {
    const { children, isTitle, rightAlign = false } = props
    return (
        <Typography
            fontSize={17}
            fontWeight={isTitle ? 'bold' : 'regular'}
            className={`flex items-center ${
                rightAlign ? 'justify-end' : 'justify-start'
            } w-fit min-w-32 min-h-7`}
        >
            {children}
        </Typography>
    )
}
