import React from 'react'
import Typography from '@mui/material/Typography'
import priceFormat from '@/utils/priceFormat'

export default function BillInfo(props) {
    const price = priceFormat('vi-VI', 'VND', props.children)

    return (
        <div className="flex min-w-full justify-between items-center">
            <Typography className="!text-xl">{props.title}:</Typography>
            <Typography className="text-gray-500 !text-xl">{price}</Typography>
        </div>
    )
}
