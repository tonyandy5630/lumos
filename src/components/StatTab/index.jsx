import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
export default function StatTab(props) {
    const { isLoading, size, icon, title, children, endAdornment } = props
    return (
        <div
            className={` ${
                size === 'small' ? 'min-w-64' : 'min-w-80'
            } pl-4 space-x-3 h-20 bg-green rounded-2xl flex justify-start items-center`}
        >
            {icon}
            <div className="flex flex-col items-start justify-center">
                <Typography
                    variant="subtitle1"
                    className="text-mosh"
                    fontWeight="bold"
                >
                    {title}
                </Typography>
                <Typography className="w-full text-white">
                    <span className="inline-block mr-2 min-w-20 ">
                        {isLoading ? (
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: '1rem' }}
                            />
                        ) : (
                            children
                        )}
                    </span>
                    {endAdornment}
                </Typography>
            </div>
        </div>
    )
}
