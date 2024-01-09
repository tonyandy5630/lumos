import React from 'react'
import Typography from '@mui/material/Typography'
export default function StatTab(props) {
    return (
        <div className="min-w-80 pl-4 space-x-3 h-20 bg-green rounded-2xl flex justify-start items-center">
            {props.icon}
            <div className="flex flex-col justify-center items-start">
                <Typography
                    variant="subtitle1"
                    className="text-mosh"
                    fontWeight="bold"
                >
                    {props.title}
                </Typography>
                <Typography className="text-white">{props.children}</Typography>
            </div>
        </div>
    )
}
