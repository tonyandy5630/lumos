'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import SuccessIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PendingIcon from '@mui/icons-material/QueryBuilderOutlined'
import CancelIcon from '@mui/icons-material/CancelOutlined'
import BOOKING_STATUS_ENUM from '@/constants/BookingStatus.const'
import WorkingIcon from '@mui/icons-material/EditCalendarOutlined'
const Chip = dynamic(() => import('@mui/material/Chip'))

const ICON_SIZE = 10
const iconSx = {
    fontSize: `${ICON_SIZE}px`,
    color: 'white !important',
}

const BookingColumns = [
    {
        accessorKey: 'bookingId',
        header: 'Code',
        size: 30,
    },
    {
        accessorKey: 'customerName',
        header: 'Customer Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'date',
        header: 'Date',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'bookingTime',
        header: 'Booking time',
        size: 150,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        headerClassName: 'bg-primary',
        Cell: ({ cell }) => {
            const { color, icon, text } = getStatusStyle(cell.getValue())
            return (
                <div className={`flex items-start`}>
                    <Chip
                        size="small"
                        label={text}
                        sx={{
                            minWidth: '116px',
                            fontWeight: 'bold',
                            fontSize: '13px',
                            bgcolor: color,
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'start',
                        }}
                        icon={icon}
                    />
                </div>
            )
        },
    },
]

const getStatusStyle = (status) => {
    if (status === BOOKING_STATUS_ENUM.Completed) {
        return {
            color: '#2EE656',
            icon: <SuccessIcon sx={iconSx} />,
            text: 'SUCCESS',
        }
    } else if (status === BOOKING_STATUS_ENUM.Pending) {
        return {
            color: '#E6BE2E',
            icon: <PendingIcon sx={iconSx} />,
            text: 'PENDING',
        }
    } else if (status === BOOKING_STATUS_ENUM.Doing) {
        return {
            color: '#FF9E9E',
            icon: <WorkingIcon sx={iconSx} />,
            text: 'On-going',
        }
    } else {
        return {
            color: '#E62E2E',
            icon: <CancelIcon sx={iconSx} />,
            text: 'CANCELLED',
        }
    }
    // } else if (status === BOOKING_STATUS_ENUM.Canceled) {
    //     return {
    //         color: '#E62E2E',
    //         icon: <CancelIcon sx={iconSx} />,
    //         text: 'CANCELLED',
    //     }
    // }
}

export default BookingColumns
