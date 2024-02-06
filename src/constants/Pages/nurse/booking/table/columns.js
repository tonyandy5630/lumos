'use client'
import React from 'react'
import SuccessIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PendingIcon from '@mui/icons-material/QueryBuilderOutlined'
import CancelIcon from '@mui/icons-material/CancelOutlined'
import Chip from '@mui/material/Chip'

const ICON_SIZE = 10
const iconSx = {
    fontSize: `${ICON_SIZE}px`,
    color: 'white !important',
}

export const bookingColumns = [
    {
        accessorKey: 'code',
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
        accessorKey: 'time',
        header: 'Rate',
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
                <div
                    className={`flex justify-between items-center rounded-full min-w-12 bg-red`}
                >
                    <Chip
                        size="small"
                        label={text}
                        sx={{
                            minWidth: '116px',
                            fontWeight: 'bold',
                            fontSize: '13px',
                            bgcolor: color,
                            color: 'white',
                        }}
                        icon={icon}
                    />
                </div>
            )
        },
    },
]

const getStatusStyle = (status) => {
    if (status === 0) {
        return {
            color: '#2EE656',
            icon: <SuccessIcon sx={iconSx} />,
            text: 'SUCCESS',
        }
    } else if (status === 1) {
        return {
            color: '#E6BE2E',
            icon: <PendingIcon sx={iconSx} />,
            text: 'PENDING',
        }
    } else if (status === 2) {
        return {
            color: '#E62E2E',
            icon: <CancelIcon sx={iconSx} />,
            text: 'CANCELLED',
        }
    }
}
