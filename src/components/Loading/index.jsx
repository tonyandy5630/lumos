import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export default function Loading(props) {
    const { variant = 'rounded', className } = props
    return <Skeleton variant={variant} className={className} />
}
