import React from 'react'
import Typography from '@mui/material/Typography'
export default function StatTab(props) {
    return (
        <div
            className={` ${
                props.size === 'small' ? 'min-w-64' : 'min-w-80'
            } pl-4 space-x-3 h-20 bg-green rounded-2xl flex justify-start items-center`}
        >
            {props.icon}
            <div className="flex flex-col items-start justify-center">
                <Typography
                    variant="subtitle1"
                    className="text-mosh"
                    fontWeight="bold"
                >
                    {props.title}
                </Typography>
                <Typography className="w-full text-white">
                    <span className="inline-block mr-2 min-w-20 ">
                        {props.children}
                    </span>
                    {props.endAdornment}
                </Typography>
            </div>
        </div>
    )
}
