import React from 'react'
import Typography from '@mui/material/Typography'

export default function DetailItem(props) {
    const { children, isTitle } = props
    return (
        <Typography
            fontSize={17}
            fontWeight={isTitle ? 'bold' : 'regular'}
            className="flex items-center justify-center w-fit min-h-7"
        >
            {children}
        </Typography>
    )
}
