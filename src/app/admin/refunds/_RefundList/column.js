'use client'
import React from 'react'
import StatusChip from '@/components/StatusChip'
import toLocaleDate from '@/utils/date'
import priceFormat from '@/utils/priceFormat'

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
        accessorKey: 'createdAt',
        header: 'Create At',
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
        accessorKey: 'totalPrice',
        header: 'Refund price',
        size: 80,
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

export const formatRefundData = (data) => {
    const {
        bookingId,
        customerName,
        email,
        phone,
        createdAt,
        cancelationReason,
        totalPrice,
        status,
    } = data
    return {
        bookingId,
        customerName,
        email,
        phone,
        createdAt: toLocaleDate(createdAt),
        cancelationReason,
        totalPrice: priceFormat('Vi-vi', 'VND', totalPrice),
        status,
    }
}

export default RefundColumns
