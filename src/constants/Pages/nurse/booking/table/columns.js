'use client'
import React from 'react'
import StatusChip from '@/components/StatusChip'

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
            return <StatusChip status={cell.getValue()} />
        },
    },
]

export default BookingColumns
