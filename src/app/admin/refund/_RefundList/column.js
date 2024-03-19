'use client'
import React from 'react'
import StatusChip from '@/components/StatusChip'

const RefundColumns = [
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
        accessorKey: 'email',
        header: 'Email',
        size: 150,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'createAt',
        header: 'Create At',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'totalPrice',
        header: 'Refund price',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'cancelationReason',
        header: 'Reason',
        size: 200,
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

export default RefundColumns
