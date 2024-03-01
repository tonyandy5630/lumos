import React from 'react'
import Typography from '@mui/material/Typography'
import TimeIcon from '@mui/icons-material/AccessTime'
import priceFormat from '@/utils/priceFormat'

const SERVICE_NAME_SIZE = 21
const PRICE_SIZE = 19
const ICON_SIZE = 14

export default function ServiceInfo(props) {
    const { name, price, duration } = props.service
    return (
        <div className="flex flex-col items-start justify-between min-w-full px-6 py-3 my-3 bg-white border border-solid rounded-xl border-mosh">
            <div className="flex items-center justify-between min-w-full text-mosh">
                <Typography
                    fontWeight="bold"
                    fontSize={`${SERVICE_NAME_SIZE}px`}
                >
                    {name}
                </Typography>
                <Typography fontSize={`${PRICE_SIZE}px`} className="text-lg ">
                    {priceFormat('vi-VI', 'VND', price)}
                </Typography>
            </div>
            <div className="flex items-center justify-between">
                <TimeIcon
                    sx={{ fontSize: `${ICON_SIZE}px` }}
                    className="mr-1"
                />
                {duration} min
            </div>
            {/* <div className="flex items-center justify-between">{bookDate}</div> */}
        </div>
    )
}
