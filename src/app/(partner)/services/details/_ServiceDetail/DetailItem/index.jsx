import React from 'react'
import Typography from '@mui/material/Typography'

export default function DetailItem(props) {
    const { children, title } = props
    return (
        <div className="flex items-center justify-start min-w-full space-x-5 min-h-12">
            <div className="flex items-center justify-end min-w-32">
                <Typography fontSize={17} fontWeight="bold">
                    {title}
                </Typography>
            </div>
            <div className="flex items-center justify-start">{children}</div>
        </div>
    )
}
