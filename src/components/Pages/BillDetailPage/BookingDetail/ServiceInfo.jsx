import React from 'react'
import Typography from '@mui/material/Typography'
import TimeIcon from '@mui/icons-material/AccessTime'
import priceFormat from '@/utils/priceFormat'

const SERVICE_NAME_SIZE = 21
const PRICE_SIZE = 19
const ICON_SIZE = 14

export default function ServiceInfo(props) {
    const { serviceName, bookDate, price, time } = props.service
    return (
        <div className="flex flex-col justify-between items-start px-6 py-3 my-3 bg-white rounded-xl min-w-full border border-solid border-mosh">
            <div className="flex justify-between items-center min-w-full text-mosh">
                <Typography
                    fontWeight="bold"
                    fontSize={`${SERVICE_NAME_SIZE}px`}
                >
                    {serviceName}
                </Typography>
                <Typography fontSize={`${PRICE_SIZE}px`} className="text-lg ">
                    {priceFormat('vi-VI', 'VND', price)}
                </Typography>
            </div>
            <div className="flex justify-between items-center">
                <TimeIcon
                    sx={{ fontSize: `${ICON_SIZE}px` }}
                    className="mr-1"
                />
                {time}
            </div>
            <div className="flex justify-between items-center">{bookDate}</div>
        </div>
    )
}
